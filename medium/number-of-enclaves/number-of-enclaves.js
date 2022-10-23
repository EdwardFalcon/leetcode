/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    mark(grid, i, 0);
    mark(grid, i, n - 1);
  }
  for (let i = 0; i < n; i++) {
    mark(grid, 0, i);
    mark(grid, m - 1, i);
  }
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result += mark(grid, i, j);
    }
  }
  return result;
};

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

var mark = function (grid, x, y) {
  if (
    x < 0 ||
    y < 0 ||
    x > grid.length - 1 ||
    y > grid[0].length - 1 ||
    grid[x][y] === 0
  ) {
    return 0;
  }
  grid[x][y] = 0;
  let result = 1;
  for (let [dx, dy] of dirs) {
    result += mark(grid, x + dx, y + dy);
  }
  return result;
};
