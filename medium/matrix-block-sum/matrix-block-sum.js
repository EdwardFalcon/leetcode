/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  const sum = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  for (let row = 1; row <= m; row++) {
    for (let col = 1; col <= n; col++) {
      sum[row][col] =
        mat[row - 1][col - 1] +
        sum[row - 1][col] +
        sum[row][col - 1] -
        sum[row - 1][col - 1];
    }
  }
  const answer = Array(m)
    .fill()
    .map(() => Array(n));
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const r1 = Math.max(0, row - k) + 1;
      const c1 = Math.max(0, col - k) + 1;
      const r2 = Math.min(m - 1, row + k) + 1;
      const c2 = Math.min(n - 1, col + k) + 1;
      answer[row][col] =
        sum[r2][c2] - sum[r2][c1 - 1] - sum[r1 - 1][c2] + sum[r1 - 1][c1 - 1];
    }
  }
  return answer;
};
