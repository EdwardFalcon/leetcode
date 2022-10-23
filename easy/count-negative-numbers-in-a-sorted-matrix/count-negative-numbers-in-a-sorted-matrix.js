/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  let row = grid.length - 1;
  let col = 0;
  while (row >= 0 && col < grid[0].length) {
    if (grid[row][col] < 0) {
      row--;
      count += grid[0].length - col;
    } else {
      col++;
    }
  }
  return count;
};
