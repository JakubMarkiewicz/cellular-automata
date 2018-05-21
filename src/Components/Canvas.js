// @flow

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
import { randomCenterFill, build2DArray } from "../lib/utils";

const copy = require("clipboard-copy");

type State = {
  gridData: Array<any>,
  gridSize: number,
  speed: number,
  building: boolean,
  type: string,
  creator: boolean,
  generation: number,
  editorCellType: number,
  running: boolean,
  position?: Object,
  direction?: string,
  testCreator?: boolean
};

type Props = {
  building?: boolean,
  creator?: boolean,
  gridData?: Array<any>,
  gridSize?: number,
  height: number,
  speed?: number,
  type?: string,
  width: number
};
class Canvas extends Component<Props, State> {
  state = {
    gridData: this.props.gridData || [],
    gridSize: this.props.gridSize || 1,
    speed: this.props.speed || 300,
    building: this.props.building || false,
    type: this.props.type || "life",
    creator: this.props.creator || false,
    editorCellType: 1,
    running: this.props.running || true,
    position: {},
    direction: "",
    testCreator: false
  };
  componentDidMount() {
    this.selectCanvas();
  }
  componentDidUpdate() {
    const ctx = this.refs.canvasRef.getContext("2d");
    ctx.clearRect(0, 0, this.props.width, this.props.height);
    this.updateCanvas();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
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
          this.props.width,
          this.props.height,
          this.state.gridSize
        )
      });
    } else {
      this.setState({ gridData: this.props.gridData });
    }
    const ctx = this.refs.canvasRef.getContext("2d");
    drawGrid(ctx, this.props.width, this.props.height, this.state.gridSize);
  };
  updateCanvas = () => {
    const ctx = this.refs.canvasRef.getContext("2d");
    switch (this.state.type) {
      case "wire":
        updateWireCanvas(
          this.state.gridData,
          ctx,
          this.props.width,
          this.props.height,
          this.state.gridSize
        );
        break;
      case "brain":
        updateBrainCanvas(
          this.state.gridData,
          ctx,
          this.props.width,
          this.props.height,
          this.state.gridSize
        );
        break;
      default:
        updateCanvas(
          this.state.gridData,
          ctx,
          this.props.width,
          this.props.height,
          this.state.gridSize
        );
    }
  };
  createEditableCanvas = () => {
    this.createEmptyCanvas();
    this.refs.canvasRef.addEventListener("click", this.setEditableCell);
  };
  setInterval = () => {
    switch (this.state.type) {
      case "life":
        if (!this.testRunning) this.initCanvas();
        this.timer = setInterval(() => {
          if (!this.state.running) return;
          const newGrid = surroundingGrid(
            this.state.gridData,
            this.props.width,
            this.props.height,
            this.state.gridSize
          );
          this.generation += 1;
          this.setState({
            gridData: newGrid
          });
        }, this.state.speed);
        break;
      case "wire":
        this.timer = setInterval(() => {
          if (!this.state.running) return;
          // const data = moveWire(this.state.gridData);
          const gridData = moveWire(
            this.state.gridData,
            this.props.height,
            this.state.gridSize
          );
          this.generation += 1;
          this.setState({
            gridData
          });
        }, this.state.speed);
        break;
      case "ant":
        this.createEmptyCanvas();
        this.timer = setInterval(() => {
          if (!this.state.running) return;
          const data = moveAnt(
            this.state.position,
            this.state.direction,
            this.state.gridData
          );
          this.generation += 1;
          this.setState({
            gridData: data.gridData,
            direction: data.newDirection
          });
        }, this.state.speed);
        break;
      case "seeds":
        this.setState({
          gridData: randomCenterFill(build2DArray(120, 200), 0.5, 3)
        });
        this.timer = setInterval(() => {
          if (!this.state.running) return;
          const gridData = moveSeeds(
            this.state.gridData,
            this.props.width,
            this.props.height,
            this.state.gridSize
          );
          this.generation += 1;
          this.setState({
            gridData
          });
        }, this.state.speed);
        break;
      case "brain":
        this.setState({
          gridData: randomCenterFill(build2DArray(120, 200), 0.9, 40)
        });
        this.timer = setInterval(() => {
          if (!this.state.running) return;
          const gridData = moveBrain(
            this.state.gridData,
            this.props.width,
            this.props.height,
            this.state.gridSize
          );
          this.generation += 1;
          this.setState({
            gridData
          });
        }, this.state.speed);
        break;
      default:
    }
  };
  createEmptyCanvas = () => {
    const ctx = this.refs.canvasRef.getContext("2d");
    drawGrid(ctx, this.props.width, this.props.height, this.state.gridSize);
    const gridData = setInitialEmptyGrid(
      this.props.width,
      this.props.height,
      this.state.gridSize
    );
    if (this.state.type === "ant") {
      initAnt(
        this.props.width,
        this.props.height,
        this.state.gridSize,
        gridData
      );
      this.setState({
        position: {
          x: this.props.width / this.state.gridSize / 2,
          y: this.props.height / this.state.gridSize / 2
        },
        direction: "up"
      });
    }
    this.setState({
      gridData
    });
  };
  setType = (ev: window.HTMLInputElement) => {
    this.createEmptyCanvas();
    this.setState({
      type: ev.target.value
    });
  };

  setRunning = () =>
    this.setState(prevState => ({ running: !prevState.running }));

  setEditableCell = ev => {
    const x = Math.floor(ev.layerX / this.state.gridSize);
    const y = Math.floor(ev.layerY / this.state.gridSize);
    const gridData = this.state.gridData;
    if (gridData[y][x] === this.state.editorCellType) {
      gridData[y][x] = 0;
    } else {
      gridData[y][x] = this.state.editorCellType;
    }
    this.setState({ gridData });
  };
  setCellType = (ev: window.HTMLInputElement) => {
    this.setState({ editorCellType: parseInt(ev.target.value) });
  };
  copyGridData = () => copy(JSON.stringify(this.state.gridData));

  resetState = () => {
    clearInterval(this.timer);
    this.setState({
      gridData: this.props.gridData || []
    });
    this.selectCanvas();
  };
  testCreator = () => {
    this.testRunning = !this.testRunning;
    console.log(this.testRunning);
    if (this.testRunning) {
      this.setInterval();
    } else {
      clearInterval(this.timer);
    }
  };
  testRunning = false;
  timer;
  generation = 0;
  render() {
    const { width, height } = this.props;
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
            generation={this.generation}
            setRunning={this.setRunning}
            running={this.state.running}
            resetState={this.resetState}
            speed={this.state.speed}
          />
        ) : (
          <EditorData
            setCellType={this.setCellType}
            type={this.state.type}
            setType={this.setType}
            copyGridData={this.copyGridData}
            testCreator={this.testCreator}
            timer={this.timer}
          />
        )}
      </div>
    );
  }
}

export default Canvas;
