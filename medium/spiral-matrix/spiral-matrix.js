/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const spirals = Math.round(Math.min(m, n) / 2);
  const result = [];
  for (let i = 0; i < spirals; i++) {
    for (let j = i; j < n - i; j++) {
      result.push(matrix[i][j]);
    }
    for (let j = i + 1; j < m - i; j++) {
      result.push(matrix[j][n - i - 1]);
    }
    if (m - i * 2 > 1) {
      for (let j = n - i - 2; j >= i; j--) {
        result.push(matrix[m - i - 1][j]);
      }
    }
    if (n - i * 2 > 1) {
      for (let j = m - i - 2; j > i; j--) {
        result.push(matrix[j][i]);
      }
    }
  }
  return result;
};
