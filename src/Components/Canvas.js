import React, { Component } from "react";
import {
  drawGrid,
  setInitialGrid,
  updateCanvas,
  surroundingGrid,
  setInitialEmptyGrid
} from "../lib/canvas-logic";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
      gridData: props.gridData || [],
      gridSize: props.gridSize || 1,
      speed: props.speed || 300,
      building: props.building || false
    };
  }
  componentDidMount() {
    const ctx = this.refs.canvasRef.getContext("2d");
    if (!this.state.building) {
      this.initCanvas();
      this.updateCanvas();
      setInterval(() => {
        ctx.clearRect(0, 0, this.state.width, this.state.height);
        const newGrid = surroundingGrid(
          this.state.gridData,
          this.state.width,
          this.state.height,
          this.state.gridSize
        );
        this.setState({ gridData: newGrid });
      }, this.state.speed);
    } else {
      this.createEditableCanvas(ctx);
    }
  }
  componentDidUpdate() {
    this.updateCanvas();
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
  createEditableCanvas = ctx => {
    drawGrid(ctx, this.state.width, this.state.height, this.state.gridSize);
    const gridData = setInitialEmptyGrid(
      this.state.width,
      this.state.height,
      this.state.gridSize
    );
    this.refs.canvasRef.addEventListener("click", this.setEditableCell);
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
