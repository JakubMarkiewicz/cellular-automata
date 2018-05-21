// @flow

import React from "react";

type Props = {
  setType: Function,
  type: string,
  setCellType: Function,
  copyGridData: Function
};

const EditorData = ({ setType, type, setCellType, copyGridData }: Props) => (
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
    </div>
    <button type="button" onClick={copyGridData}>
      Copy Data
    </button>
    <button type="button" onClick={copyGridData}>
      Test
    </button>
  </div>
);

export default EditorData;
