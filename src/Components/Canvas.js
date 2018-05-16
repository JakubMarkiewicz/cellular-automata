import React, { Component } from "react";
import {
  drawGrid,
  setInitialGrid,
  updateCanvas,
  surroundingGrid,
  setInitialEmptyGrid
} from "../lib/canvas-logic";
import { initAnt, moveAnt } from "../lib/langtons-logic";

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
      type: props.type || "life"
    };
  }
  componentDidMount() {
    const ctx = this.refs.canvasRef.getContext("2d");
    if (this.state.type === "ant") {
      this.createEmptyCanvas();
      let antInterval = setInterval(() => {
        const data = moveAnt(
          this.state.position,
          this.state.direction,
          this.state.gridData
        );
        this.setState({
          gridData: data.gridData,
          direction: data.newDirection
        });
      }, this.state.speed);
      this.setState({ intervalId: antInterval });
    } else if (!this.state.building) {
      this.initCanvas();
      this.updateCanvas();
      const lifeInterval = setInterval(() => {
        const newGrid = surroundingGrid(
          this.state.gridData,
          this.state.width,
          this.state.height,
          this.state.gridSize
        );
        this.setState({ gridData: newGrid });
      }, this.state.speed);
      this.setState({ intervalId: lifeInterval });
    } else {
      this.createEditableCanvas(ctx);
    }
  }
  componentDidUpdate() {
    const ctx = this.refs.canvasRef.getContext("2d");
    ctx.clearRect(0, 0, this.state.width, this.state.height);
    this.updateCanvas();
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  initCanvas = () => {
    this.props.gridData === undefined &&
      this.setState({
        gridData: setInitialGrid(
          this.state.width,
          this.state.height,
          this.state.gridSize
        )
      });
    const ctx = this.refs.canvasRef.getContext("2d");
    drawGrid(ctx, this.state.width, this.state.height, this.state.gridSize);
  };
  updateCanvas = () => {
    const ctx = this.refs.canvasRef.getContext("2d");
    updateCanvas(
      this.state.gridData,
      ctx,
      this.state.width,
      this.state.height,
      this.state.gridSize
    );
  };
  createEditableCanvas = () => {
    const ctx = this.refs.canvasRef.getContext("2d");
    this.createEmptyCanvas(ctx);
    this.refs.canvasRef.addEventListener("click", this.setEditableCell);
  };
  createEmptyCanvas = ctx => {
    ctx = ctx || this.refs.canvasRef.getContext("2d");
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
  setEditableCell = ev => {
    const x = Math.floor(ev.layerX / this.state.gridSize);
    const y = Math.floor(ev.layerY / this.state.gridSize);
    let gridData = this.state.gridData;
    gridData[y][x] = gridData[y][x] === 0 ? 1 : 0;
    this.setState({ gridData });
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
      </div>
    );
  }
}

export default Canvas;
