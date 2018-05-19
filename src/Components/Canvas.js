import React, { Component } from "react";
import {
  drawGrid,
  setInitialGrid,
  updateCanvas,
  surroundingGrid,
  setInitialEmptyGrid
} from "../lib/canvas-logic";
import { updateWireCanvas, moveWire } from "../lib/wireworld-logic";
import { initAnt, moveAnt } from "../lib/langtons-logic";
import Data from "./SharedComponents/Data";
import EditorData from "./SharedComponents/EditorData";
import { moveSeeds } from "../lib/seeds-logic";
import { moveBrain, updateBrainCanvas } from "../lib/brain-logic";
const copy = require("clipboard-copy");

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
      gridData: props.gridData || [],
      gridSize: props.gridSize || 1,
      speed: props.speed || 300,
      building: props.building || false,
      type: props.type || "life",
      creator: props.creator || false,
      generation: 0,
      editorCellType: 1,
      running: true
    };
  }
  componentDidMount() {
    this.selectCanvas();
  }
  componentDidUpdate() {
    const ctx = this.refs.canvasRef.getContext("2d");
    ctx.clearRect(0, 0, this.state.width, this.state.height);
    this.updateCanvas();
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  selectCanvas = () => {
    switch (this.state.type) {
      case "creator":
        this.createEditableCanvas();
      default:
        this.setInterval();
    }
  };

  initCanvas = () => {
    if (this.props.gridData === undefined) {
      this.setState({
        gridData: setInitialGrid(
          this.state.width,
          this.state.height,
          this.state.gridSize
        )
      });
    } else {
      this.setState({ gridData: this.props.gridData });
    }
    const ctx = this.refs.canvasRef.getContext("2d");
    drawGrid(ctx, this.state.width, this.state.height, this.state.gridSize);
  };
  updateCanvas = () => {
    const ctx = this.refs.canvasRef.getContext("2d");
    switch (this.state.type) {
      case "wire":
        updateWireCanvas(
          this.state.gridData,
          ctx,
          this.state.width,
          this.state.height,
          this.state.gridSize
        );
        break;
      case "brain":
        updateBrainCanvas(
          this.state.gridData,
          ctx,
          this.state.width,
          this.state.height,
          this.state.gridSize
        );
        break;
      default:
        updateCanvas(
          this.state.gridData,
          ctx,
          this.state.width,
          this.state.height,
          this.state.gridSize
        );
    }
  };
  createEditableCanvas = () => {
    const ctx = this.refs.canvasRef.getContext("2d");
    this.createEmptyCanvas(ctx);
    this.refs.canvasRef.addEventListener("click", this.setEditableCell);
  };
  setInterval = () => {
    switch (this.state.type) {
      case "life":
        this.initCanvas();
        const lifeInterval = setInterval(() => {
          if (!this.state.running) return;
          const newGrid = surroundingGrid(
            this.state.gridData,
            this.state.width,
            this.state.height,
            this.state.gridSize
          );
          this.setState(prevState => ({
            gridData: newGrid,
            generation: prevState.generation + 1
          }));
        }, this.state.speed);
        this.setState({ intervalId: lifeInterval });
        break;
      case "wire":
        let wireInterval = setInterval(() => {
          if (!this.state.running) return;
          // const data = moveWire(this.state.gridData);
          const gridData = moveWire(
            this.state.gridData,
            this.state.height,
            this.state.gridSize
          );
          this.setState(prevState => ({
            gridData,
            generation: prevState.generation + 1
          }));
        }, this.state.speed);
        this.setState({ intervalId: wireInterval });
        break;
      case "ant":
        this.createEmptyCanvas();
        let antInterval = setInterval(() => {
          if (!this.state.running) return;
          const data = moveAnt(
            this.state.position,
            this.state.direction,
            this.state.gridData
          );
          this.setState(prevState => ({
            gridData: data.gridData,
            direction: data.newDirection,
            generation: prevState.generation + 1
          }));
        }, this.state.speed);
        this.setState({ intervalId: antInterval });
        break;
      case "seeds":
        // this.initCanvas();
        let seedsInterval = setInterval(() => {
          if (!this.state.running) return;
          const gridData = moveSeeds(
            this.state.gridData,
            this.state.width,
            this.state.height,
            this.state.gridSize
          );
          this.setState(prevState => ({
            gridData,
            generation: prevState.generation + 1
          }));
        }, this.state.speed);
        this.setState({ intervalId: seedsInterval });
        break;
      case "brain":
        let brainInterval = setInterval(() => {
          if (!this.state.running) return;
          const gridData = moveBrain(
            this.state.gridData,
            this.state.width,
            this.state.height,
            this.state.gridSize
          );
          this.setState(prevState => ({
            gridData,
            generation: prevState.generation + 1
          }));
        }, this.state.speed);
        this.setState({ intervalId: brainInterval });
        break;
      default:
    }
  };
  createEmptyCanvas = () => {
    const ctx = this.refs.canvasRef.getContext("2d");
    drawGrid(ctx, this.state.width, this.state.height, this.state.gridSize);
    let gridData = setInitialEmptyGrid(
      this.state.width,
      this.state.height,
      this.state.gridSize
    );
    if (this.state.type === "ant") {
      initAnt(
        this.state.width,
        this.state.height,
        this.state.gridSize,
        gridData
      );
      this.setState({
        position: {
          x: this.state.width / this.state.gridSize / 2,
          y: this.state.height / this.state.gridSize / 2
        },
        direction: "up"
      });
    }
    this.setState({
      gridData: gridData
    });
  };
  setType = ev => {
    const ctx = this.refs.canvasRef.getContext("2d");
    this.createEmptyCanvas(ctx);
    this.setState({
      type: ev.target.value
    });
  };

  setRunning = () =>
    this.setState(prevState => ({ running: !prevState.running }));

  setEditableCell = ev => {
    const x = Math.floor(ev.layerX / this.state.gridSize);
    const y = Math.floor(ev.layerY / this.state.gridSize);
    let gridData = this.state.gridData;
    if (gridData[y][x] === this.state.editorCellType) {
      gridData[y][x] = 0;
    } else {
      gridData[y][x] = this.state.editorCellType;
    }
    this.setState({ gridData });
  };
  setCellType = ev => {
    this.setState({ editorCellType: parseInt(ev.target.value) });
  };
  copyGridData = () => copy(JSON.stringify(this.state.gridData));

  resetState = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      generation: 0,
      gridData: this.props.gridData || []
    });
    this.selectCanvas();
  };

  render() {
    const { width, height } = this.state;
    return (
      <div className="canvas">
        <canvas
          ref="canvasRef"
          width={width}
          height={height}
          style={{ background: "black" }}
        />
        {!this.state.creator ? (
          <Data
            generation={this.state.generation}
            setRunning={this.setRunning}
            running={this.state.running}
            resetState={this.resetState}
          />
        ) : (
          <EditorData
            setCellType={this.setCellType}
            type={this.state.type}
            setType={this.setType}
            copyGridData={this.copyGridData}
          />
        )}
      </div>
    );
  }
}

export default Canvas;
