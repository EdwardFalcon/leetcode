/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  let min = matrix[0][0];
  let max = matrix[n - 1][n - 1];
  while (min < max) {
    const mid = Math.floor((max + min) / 2);
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] > mid) {
          break;
        }
        count++;
      }
    }
    if (count < k) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }
  return min;
};
