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
      width: props.width,
      height: props.height,
      gridData: props.gridData || [],
      gridSize: props.gridSize || 1,
      speed: props.speed || 300
    };
  }
  componentDidMount() {
    const ctx = this.refs.canvasRef.getContext("2d");
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
      updateCanvas(
        newGrid,
        ctx,
        this.state.width,
        this.state.height,
        this.state.gridSize
      );
      this.setState({ gridData: newGrid });
    }, this.state.speed);
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
