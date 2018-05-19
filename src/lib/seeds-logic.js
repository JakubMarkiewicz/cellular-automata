import { countSurrounding } from "./canvas-logic";

export const moveSeeds = (grid, width, height, gridSize) =>
  grid.map((row, rowInd) =>
    row.map((val, colInd) => {
      if (val === 0) {
        const count = countSurrounding(grid, rowInd, colInd, height, gridSize);
        if (count === 2) return 1;
      }
      return 0;
    })
  );