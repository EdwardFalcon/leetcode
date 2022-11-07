/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const dp = Array(matrix.length + 1)
    .fill()
    .map(() => Array(matrix.length + 2).fill(0));
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length - 1; j++) {
      dp[i][j] =
        Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) +
        matrix[i - 1][j - 1];
    }
    dp[i][0] = dp[i][1];
    dp[i][dp[0].length - 1] = dp[i][dp[0].length - 2];
  }
  return Math.min(...dp[dp.length - 1]);
};
