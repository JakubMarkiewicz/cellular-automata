// @flow

import React from "react";

type Props = {
  setType: Function,
  type: string,
  setCellType: Function,
  copyGridData: Function,
  testRunning: boolean
};

const EditorData = ({
  setType,
  type,
  setCellType,
  copyGridData,
  testCreator,
  testRunning
}: Props) => (
  <div className="data">
    <div className="data__select">
      <select onChange={setType}>
        <option value="life">Game of life</option>
        <option value="wire">Wireworld</option>
      </select>
      {type === "wire" ? (
        <select onChange={setCellType}>
          <option value="0">Null</option>
          <option value="1">Head</option>
          <option value="2">Tail</option>
          <option value="3">Path</option>
        </select>
      ) : (
        <select onChange={setCellType}>
          <option value="0">Dead</option>
          <option value="1">Live</option>
        </select>
      )}
      <button type="button" onClick={copyGridData}>
        Copy Data
      </button>
      <button type="button" onClick={testCreator}>
        {!testRunning ? "Start test" : "Pause Test"}
      </button>
    </div>
  </div>
);

export default EditorData;
