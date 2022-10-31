/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (row > 0 && col > 0 && matrix[row][col] !== matrix[row - 1][col - 1]) {
        return false;
      }
    }
  }
  return true;
};
