/**
 * @param {number[][]} grid
 * @return {number}
 */

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

var shortestBridge = function (grid) {
  let isMarked = false;
  for (let i = 0; i < grid.length && !isMarked; i++) {
    for (let j = 0; j < grid.length && !isMarked; j++) {
      if (grid[i][j] === 1) {
        markIsland(grid, i, j);
        isMarked = true;
      }
    }
  }
  let l = 2;
  while (true) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === l) {
          for (let [dx, dy] of dirs) {
            if (expandIsland(grid, i + dx, j + dy, l)) {
              return l - 2;
            }
          }
        }
      }
    }
    l++;
  }
};

var markIsland = function (grid, x, y) {
  if (
    x < 0 ||
    y < 0 ||
    x > grid.length - 1 ||
    y > grid.length - 1 ||
    grid[x][y] !== 1
  ) {
    return;
  }
  grid[x][y] = 2;
  for (let [dx, dy] of dirs) {
    markIsland(grid, x + dx, y + dy);
  }
};

var expandIsland = function (grid, x, y, l) {
  if (x < 0 || y < 0 || x > grid.length - 1 || y > grid.length - 1) {
    return false;
  }
  if (grid[x][y] === 1) {
    return true;
  }
  if (grid[x][y] === 0) {
    grid[x][y] = l + 1;
  }
  return false;
};
