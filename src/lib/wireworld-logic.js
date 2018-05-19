import { drawGrid } from "./canvas-logic";

export const updateWireCanvas = (grid, ctx, width, height, gridSize) => {
  drawGrid(ctx, width, height, gridSize);
  return grid.map((row, rowInd) =>
    row.map((singleVal, colInd) => {
      if (singleVal === 1) {
        ctx.fillStyle = "#3AB6D5";
        ctx.fillRect(
          colInd * gridSize + gridSize * 0.02,
          rowInd * gridSize + gridSize * 0.02,
          gridSize - gridSize * 0.04,
          gridSize - gridSize * 0.04
        );
      }
      if (singleVal === 2) {
        ctx.fillStyle = "#ff7675";
        ctx.fillRect(
          colInd * gridSize + gridSize * 0.02,
          rowInd * gridSize + gridSize * 0.02,
          gridSize - gridSize * 0.04,
          gridSize - gridSize * 0.04
        );
      }
      if (singleVal === 3) {
        ctx.fillStyle = "#F79701";
        ctx.fillRect(
          colInd * gridSize + gridSize * 0.02,
          rowInd * gridSize + gridSize * 0.02,
          gridSize - gridSize * 0.04,
          gridSize - gridSize * 0.04
        );
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
