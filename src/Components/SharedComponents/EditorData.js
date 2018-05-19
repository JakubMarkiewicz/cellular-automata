import React from "react";

const EditorData = ({ setType, type, setCellType, copyGridData }) => (
  <div className="data">
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
  </div>
);

export default EditorData;
