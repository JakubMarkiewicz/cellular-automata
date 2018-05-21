// @flow

import React, { Component } from "react";
import Canvas from "./Canvas";
import Layout from "./SharedComponents/Layout";
import "../Styles/creator.css";

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
    building: true
  };
  onChange = (type: string, data: string) =>
    this.setState({ [type]: parseInt(data) });
  createCanvas = () => this.setState({ building: false });
  render() {
    const { building, gridSize, width, height } = this.state;
    return (
      <div className="creator">
        {building ? (
          <React.Fragment>
            <div className="creator__options">
              <div>
                <span className="creator__options__single">Grid size</span>
                <input
                  type="number"
                  value={gridSize}
                  onChange={data =>
                    this.onChange("gridSize", data.target.value)
                  }
                />
              </div>
              <div>
                <span className="creator__options__single">Width</span>
                <input
                  type="number"
                  value={width}
                  onChange={data => this.onChange("width", data.target.value)}
                />
              </div>
              <div>
                <span className="creator__options__single">Height</span>
                <input
                  type="number"
                  value={height}
                  onChange={data => this.onChange("height", data.target.value)}
                />
              </div>
            </div>
            <button onClick={this.createCanvas}>Create</button>
          </React.Fragment>
        ) : (
          <Layout>
            <Canvas
              height={height}
              width={width}
              gridSize={gridSize}
              building={building}
              creator={true}
              type="creator"
            />
          </Layout>
        )}
      </div>
    );
  }
}

export default Creator;
