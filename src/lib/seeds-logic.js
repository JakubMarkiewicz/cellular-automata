// @flow

import { countSurrounding } from "./canvas-logic";

export const moveSeeds = (
  grid: Array<any>,
  width: number,
  height: number,
  gridSize: number
) =>
  grid.map((row, rowInd) =>
    row.map((val, colInd) => {
      if (val === 0) {
        const count = countSurrounding(
          grid,
          rowInd,
          colInd,
          height,
          width,
          gridSize
        );
        if (count === 2) return 1;
      }
      return 0;
    })
  );
