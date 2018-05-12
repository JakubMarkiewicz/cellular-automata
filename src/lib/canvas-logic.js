const width = 1000,
  height = 600,
  gridSize = 5,
  possibility = 0.8;

export const drawGrid = props => {
  props.ctx.strokeStyle = "#111";
  for (let i = gridSize + 0.5; i < width; i += gridSize) {
    props.ctx.beginPath();
    props.ctx.moveTo(i, 0);
    props.ctx.lineTo(i, height);
    props.ctx.stroke();
  }
  for (let i = gridSize + 0.5; i < height; i += gridSize) {
    props.ctx.beginPath();
    props.ctx.moveTo(0, i);
    props.ctx.lineTo(width, i);
    props.ctx.stroke();
  }
};

export const setInitialGrid = () => {
  let arr = [];
  for (let y = 0; y < height / gridSize; y++) {
    let row = [];
    for (let i = 0; i < width / gridSize; i++) {
      row.push(0);
    }
    arr.push(row);
  }
  return randomizeGrid(arr);
};

const randomizeGrid = grid =>
  grid.map(row =>
    row.map(singleVal => (singleVal = Math.random() < possibility ? 0 : 1))
  );

export const updateCanvas = (grid, ctx) => {
  drawGrid({ ctx });
  return grid.map((row, rowInd) =>
    row.map((singleVal, colInd) => {
      if (singleVal === 1) {
        ctx.fillStyle = "#FFF";
        ctx.fillRect(colInd * gridSize, rowInd * gridSize, gridSize, gridSize);
      }
    })
  );
};

export const surroundingGrid = grid =>
  grid.map((row, rowInd) =>
    row.map((val, colInd) => {
      const count = countSurrounding(grid, rowInd, colInd);
      if (val === 1 && (count === 2 || count === 3)) return 1;
      if (val === 0 && count === 3) return 1;
      return 0;
    })
  );

const countSurrounding = (grid, rowInd, colInd) => {
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
