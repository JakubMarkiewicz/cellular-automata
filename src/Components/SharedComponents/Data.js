import React from "react";
import "../../Styles/data.css";

const Data = ({ generation, setRunning, resetState, running, speed }) => (
  <div className="data">
    <div className="data__info">
      <span className="data__info__single">Generation: {generation}</span>
      <span className="data__info__single">Speed: {speed / 1000}s</span>
    </div>
    <div className="data__control">
      <button onClick={setRunning}>{running ? "Pause" : "Continue"}</button>
      <button onClick={resetState}>Reset</button>
    </div>
  </div>
);

export default Data;
