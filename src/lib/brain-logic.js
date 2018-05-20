import { countSurrounding, drawGrid } from "./canvas-logic";

export const moveBrain = (grid, width, height, gridSize) =>
  grid.map((row, rowInd) =>
    row.map((val, colInd) => {
      if (val === 0) {
        const count = countSurrounding(grid, rowInd, colInd, height, gridSize);
        if (count === 2) return 1;
      }
      if (val === 1) return 2;
      return 0;
    }));

export const updateBrainCanvas = (grid, ctx, width, height, gridSize) => {
  drawGrid(ctx, width, height, gridSize);
  return grid.map((row, rowInd) =>
    row.map((singleVal, colInd) => {
      if (singleVal === 1) {
        ctx.fillStyle = "#FFF";
        ctx.fillRect(
          colInd * gridSize + gridSize * 0.02,
          rowInd * gridSize + gridSize * 0.02,
          gridSize - gridSize * 0.04,
          gridSize - gridSize * 0.04,
        );
      }
      if (singleVal === 2) {
        ctx.fillStyle = "#2EC4B6";
        ctx.fillRect(
          colInd * gridSize + gridSize * 0.02,
          rowInd * gridSize + gridSize * 0.02,
          gridSize - gridSize * 0.04,
          gridSize - gridSize * 0.04,
        );
      }
    }));
};
