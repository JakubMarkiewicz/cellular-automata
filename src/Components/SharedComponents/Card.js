import React from "react";
import Canvas from "../Canvas";
import "../../Styles/card.css";

const Card = props => (
  <div className="card" style={{ flexBasis: "30%", marginBottom: "2em" }}>
    <div className="card_name" style={{ paddingTop: 10 }}>
      {props.name}
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}
    >
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
