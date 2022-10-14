/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const result = [];
  for (let i = 0; i < grid[0].length; i++) {
    result[i] = isFall(i, grid);
  }
  return result;
};

var isFall = function (col, grid) {
  let falling = false;
  for (let row = 0; row < grid.length; row++) {
    falling = !falling;
    if (!falling) {
      continue;
    }
    if (grid[row][col] === 1) {
      if (col === grid[0].length - 1 || grid[row][col + 1] === -1) {
        return -1;
      }
      col++;
    } else {
      if (col === 0 || grid[row][col - 1] === 1) {
        return -1;
      }
      col--;
    }
    row--;
  }
  return col;
};
