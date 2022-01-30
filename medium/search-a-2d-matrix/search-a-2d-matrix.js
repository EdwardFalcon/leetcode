/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const cols = matrix[0].length;
  const rows = matrix.length;
  let start = 0;
  let end = rows * cols - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const val = matrix[Math.floor(mid / cols)][mid % cols];
    if (val === target) {
      return true;
    } else if (val > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};
