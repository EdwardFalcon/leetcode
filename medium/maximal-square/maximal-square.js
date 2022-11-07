/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const dp = Array(matrix.length + 1)
    .fill()
    .map(() => Array(matrix[0].length + 1).fill(0));
  let length = 0;
  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
        length = Math.max(length, dp[i][j]);
      }
    }
  }
  return length * length;
};
