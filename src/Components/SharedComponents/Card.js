// @flow

import React from "react";
import Canvas from "../Canvas";
import "../../Styles/card.css";

type Props = {
  name: string,
  height: number,
  width: number,
  gridSize: number,
  gridData: Array<any>
};

const Card = ({
  name, height, width, gridSize, gridData,
}: Props) => (
  <div className="card">
    <div className="card_name">{name}</div>
    <div className="card_canvas">
      <Canvas
        height={height || 250}
        width={width || 250}
        gridSize={gridSize || 10}
        gridData={gridData}
      />
    </div>
  </div>
);

export default Card;
