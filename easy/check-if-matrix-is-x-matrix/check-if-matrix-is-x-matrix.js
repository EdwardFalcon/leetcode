/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  const n = grid.length;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (row === col || n - row - 1 === col) {
        if (grid[row][col] === 0) {
          return false;
        }
      } else if (grid[row][col] !== 0) {
        return false;
      }
    }
  }
  return true;
};
