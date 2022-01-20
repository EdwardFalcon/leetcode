/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, getArea(grid, i, j));
      }
    }
  }
  return maxArea;
};

var getArea = function (grid, x, y) {
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
  return (
    1 +
    getArea(grid, x + 1, y) +
    getArea(grid, x - 1, y) +
    getArea(grid, x, y + 1) +
    getArea(grid, x, y - 1)
  );
};
