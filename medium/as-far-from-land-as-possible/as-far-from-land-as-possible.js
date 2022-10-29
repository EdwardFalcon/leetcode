/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const landStack = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        landStack.push([i, j]);
      }
    }
  }
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let dist = 0;
  while (landStack.length) {
    const [x, y] = landStack.pop();
    for (let [dx, dy] of dirs) {
      if (!isBound(grid, x + dx, y + dy)) {
        dist = grid[x][y] + 1;
        grid[x + dx][y + dy] = dist;
        landStack.unshift([x + dx, y + dy]);
      }
    }
  }
  return dist - 1;
};

var isBound = function (grid, x, y) {
  return (
    x < 0 ||
    y < 0 ||
    x > grid.length - 1 ||
    y > grid.length - 1 ||
    grid[x][y] !== 0
  );
};
