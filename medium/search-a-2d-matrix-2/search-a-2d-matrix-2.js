/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let row = rows - 1;
  let column = 0;
  while (row >= 0 && column < columns) {
    const current = matrix[row][column];
    if (target < current) {
      row--;
    } else if (target > current) {
      column++;
    } else {
      return true;
    }
  }
  return false;
};
