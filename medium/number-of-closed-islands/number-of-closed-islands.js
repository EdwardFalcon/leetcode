/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
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
  let islands = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        islands++;
        mark(grid, i, j);
      }
    }
  }
  return islands;
};

var dirs = [
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
    grid[x][y] !== 0
  ) {
    return;
  }
  grid[x][y] = 1;
  for (let [dx, dy] of dirs) {
    mark(grid, x + dx, y + dy);
  }
};
