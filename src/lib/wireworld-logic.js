import { drawGrid } from "./canvas-logic";

export const updateWireCanvas = (grid, ctx, width, height, gridSize) => {
  drawGrid(ctx, width, height, gridSize);
  return grid.map((row, rowInd) =>
    row.map((singleVal, colInd) => {
      if (singleVal === 1) {
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(colInd * gridSize, rowInd * gridSize, gridSize, gridSize);
      }
      if (singleVal === 2) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(colInd * gridSize, rowInd * gridSize, gridSize, gridSize);
      }
      if (singleVal === 3) {
        ctx.fillStyle = "#FFFF00";
        ctx.fillRect(colInd * gridSize, rowInd * gridSize, gridSize, gridSize);
      }
    })
  );
};

export const moveWire = (gridData, height, gridSize) =>
  gridData.map((row, rowInd) =>
    row.map((col, colInd) => {
      if (col === 3) {
        const count = countSurrounding(
          gridData,
          rowInd,
          colInd,
          height,
          gridSize
        );
        if (count === 1 || count === 2) return 1;
      }
      if (col === 1) {
        return 2;
      }
      if (col === 2) {
        return 3;
      }
      return col;
    })
  );

const countSurrounding = (grid, rowInd, colInd, height, gridSize) => {
  let count = 0;
  //left right
  if (grid[rowInd][colInd - 1] === 1) count += 1;
  if (grid[rowInd][colInd + 1] === 1) count += 1;
  //top
  if (rowInd > 0) {
    if (grid[rowInd - 1][colInd - 1] === 1) count += 1;
    if (grid[rowInd - 1][colInd] === 1) count += 1;
    if (grid[rowInd - 1][colInd + 1] === 1) count += 1;
  }
  //bot
  if (rowInd + 1 < height / gridSize) {
    if (grid[rowInd + 1][colInd - 1] === 1) count += 1;
    if (grid[rowInd + 1][colInd] === 1) count += 1;
    if (grid[rowInd + 1][colInd + 1] === 1) count += 1;
  }
  return count;
};
