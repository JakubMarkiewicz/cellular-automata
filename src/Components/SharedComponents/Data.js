import React from "react";

const Data = props => (
  <div className="data">
    <span>Generation: {props.generation}</span>
    <button onClick={() => props.setRunning()}>
      {props.running ? "Pause" : "Continue"}
    </button>
  </div>
);

export default Data;
