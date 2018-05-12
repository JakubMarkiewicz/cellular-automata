import React, { Component } from "react";
import {
  drawGrid,
  setInitialGrid,
  updateCanvas,
  surroundingGrid
} from "../lib/canvas-logic";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 600,
      gridData: setInitialGrid()
    };
  }
  componentDidMount() {
    const ctx = this.refs.canvasRef.getContext("2d");
    this.initCanvas();
    this.updateCanvas();
    setInterval(() => {
      ctx.clearRect(0, 0, this.state.width, this.state.height);
      const newGrid = surroundingGrid(this.state.gridData);
      updateCanvas(newGrid, ctx);
      this.setState({ gridData: newGrid });
    }, 100);
  }
  initCanvas = () => {
    const ctx = this.refs.canvasRef.getContext("2d");
    drawGrid({ ctx });
  };
  updateCanvas = () => {
    const ctx = this.refs.canvasRef.getContext("2d");
    updateCanvas(this.state.gridData, ctx);
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
