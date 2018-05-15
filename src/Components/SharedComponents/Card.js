import React from "react";
import Canvas from "../Canvas";
import "../../Styles/card.css";

const Card = props => (
  <div className="card">
    <div className="card_name">{props.name}</div>
    <div className="card_canvas">
      <Canvas
        height={props.height || 250}
        width={props.width || 250}
        gridSize={props.gridSize || 10}
        gridData={props.gridData}
      />
    </div>
  </div>
);

export default Card;
