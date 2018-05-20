const directions = ["up", "right", "down", "left"];

export const initAnt = (width, height, gridSize, gridData) =>
  (gridData[height / gridSize / 2][width / gridSize / 2] = 1);

const setNewStep = (position, direction) => {
  const newPosition = position;
  switch (direction) {
    case "up":
      newPosition.y -= 1;
      break;
    case "down":
      newPosition.y += 1;
      break;
    case "left":
      newPosition.x -= 1;
      break;
    case "right":
      newPosition.x += 1;
      break;
    default:
  }
  return newPosition;
};

const setNewDirection = (direction, white) => {
  const ind = directions.indexOf(direction);
  if (white) {
    return directions[ind + 1] !== undefined
      ? directions[ind + 1]
      : directions[0];
  }
  return directions[ind - 1] !== undefined
    ? directions[ind - 1]
    : directions[3];
};

export const moveAnt = (position, direction, gridData) => {
  if (gridData[position.y][position.x] === 0) {
    gridData[position.y][position.x] = 1;
    const newDirection = setNewDirection(direction, true);
    setNewStep(position, newDirection);
    return { gridData, newDirection };
  }
  gridData[position.y][position.x] = 0;
  const newDirection = setNewDirection(direction, false);
  setNewStep(position, newDirection);
  return { gridData, newDirection };
};
