// @flow

import React, { Component } from "react";
import Canvas from "./Canvas";

type State = {
  gridSize: number,
  width: number,
  height: number,
  building: boolean
};
type Props = {};
class Creator extends Component<Props, State> {
  state = {
    gridSize: 0,
    width: 0,
    height: 0,
    building: true,
  };
  onChange = (type: string, data: string) =>
    this.setState({ [type]: parseInt(data) });
  createCanvas = () => this.setState({ building: false });
  render() {
    const {
      building, gridSize, width, height,
    } = this.state;
    return (
      <div className="creator">
        {building ? (
          <div className="creator_options">
            <div>
              Grid size{" "}
              <input
                type="number"
                value={gridSize}
                onChange={data => this.onChange("gridSize", data.target.value)}
              />
            </div>
            <div>
              Width{" "}
              <input
                type="number"
                value={width}
                onChange={data => this.onChange("width", data.target.value)}
              />
            </div>
            <div>
              Height{" "}
              <input
                type="number"
                value={height}
                onChange={data => this.onChange("height", data.target.value)}
              />
            </div>
            <button onClick={this.createCanvas}>Create</button>
          </div>
        ) : (
          <Canvas
            height={height}
            width={width}
            gridSize={gridSize}
            building
            creator
            type="creator"
          />
        )}
      </div>
    );
  }
}

export default Creator;
