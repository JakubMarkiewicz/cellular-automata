import React from "react";

const Data = ({
  generation, setRunning, resetState, running,
}) => (
  <div className="data">
    <span>Generation: {generation}</span>
    <button onClick={setRunning}>{running ? "Pause" : "Continue"}</button>
    <button onClick={resetState}>Reset</button>
  </div>
);

export default Data;
