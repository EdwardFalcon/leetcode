/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let subIslands = 0;
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[0].length; j++) {
      if (grid2[i][j] === 1) {
        const result = mark(grid2, grid1, i, j);
        subIslands += result;
      }
    }
  }
  return subIslands;
};

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

var mark = function (grid, checkGrid, x, y) {
  if (
    x < 0 ||
    y < 0 ||
    x > grid.length - 1 ||
    y > grid[0].length - 1 ||
    grid[x][y] === 0
  ) {
    return true;
  }
  grid[x][y] = 0;
  let result = checkGrid[x][y] === 1;
  for (let [dx, dy] of dirs) {
    const temp = mark(grid, checkGrid, x + dx, y + dy);
    result = result && temp;
  }
  return result;
};
