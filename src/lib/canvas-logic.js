const possibility = 0.9;

export const drawGrid = (ctx, width, height, gridSize) => {
  ctx.strokeStyle = "#111";
  for (let i = gridSize + 0.5; i < width; i += gridSize) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }
  for (let i = gridSize + 0.5; i < height; i += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.stroke();
  }
};

export const setInitialEmptyGrid = (width, height, gridSize) =>
  Array.from({ length: height / gridSize }, () =>
    Array.from({ length: width / gridSize }, () => 0)
  );

const randomizeGrid = grid =>
  grid.map(row => row.map(() => (Math.random() < possibility ? 0 : 1)));

export const setInitialGrid = (width, height, gridSize) =>
  randomizeGrid(setInitialEmptyGrid(width, height, gridSize));

export const updateCanvas = (grid, ctx, width, height, gridSize) => {
  drawGrid(ctx, width, height, gridSize);
  return grid.map((row, rowInd) =>
    row.map((singleVal, colInd) => {
      if (singleVal === 1) {
        ctx.fillStyle = "#FFF";
        ctx.fillRect(
          colInd * gridSize + gridSize * 0.02,
          rowInd * gridSize + gridSize * 0.02,
          gridSize - gridSize * 0.04,
          gridSize - gridSize * 0.04
        );
      }
      return singleVal;
    })
  );
};

export const countSurrounding = (
  grid,
  rowInd,
  colInd,
  height,
  width,
  gridSize
) => {
  let count = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const row =
        (rowInd + i + Math.floor(height / gridSize)) %
        Math.floor(height / gridSize);
      const col =
        (colInd + j + Math.floor(width / gridSize)) %
        Math.floor(width / gridSize);
      count = grid[row][col] === 1 ? count + 1 : count;
    }
  }
  count = grid[rowInd][colInd] > 0 ? count - 1 : count;
  return count;
};

export const surroundingGrid = (grid, width, height, gridSize) =>
  grid.map((row, rowInd) =>
    row.map((val, colInd) => {
      const count = countSurrounding(
        grid,
        rowInd,
        colInd,
        height,
        width,
        gridSize
      );
      if (val === 1 && (count === 2 || count === 3)) return 1;
      if (val === 0 && count === 3) return 1;
      return 0;
    })
  );
