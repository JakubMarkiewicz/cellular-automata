// @flow

export const randomCenterFill = (
  arr: Array<Array>,
  probability: Number,
  spread: Number
) => {
  const startingRow = Math.floor((arr.length - 1) / 2) - spread;
  const endingRow = Math.floor((arr.length - 1) / 2) + spread;
  const startingCol = Math.floor((arr[0].length - 1) / 2) - spread;
  const endingCol = Math.floor((arr[0].length - 1) / 2) + spread;
  for (let i = startingRow; i <= endingRow; i++) {
    for (let y = startingCol; y <= endingCol; y++) {
      if (Math.random() > probability) arr[i][y] = 1;
    }
  }
  return arr;
};

export const build2DArray = (columns: number, rows: number) => {
  return Array.from({ length: 120 }, () =>
    Array.from({ length: 200 }, () => 0)
  );
};
