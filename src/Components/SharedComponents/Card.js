import React from "react";
import Canvas from "../Canvas";
import "../../Styles/card.css";

const Card = props => (
  <div className="card">
    <div className="card_name">{props.name}</div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}
    >
      <Canvas
        height={250}
        width={250}
        gridSize={props.gridSize || 10}
        gridData={props.gridData}
      />
    </div>
  </div>
);

export default Card;
