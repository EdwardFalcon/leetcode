/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const dp = [];
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0]) {
    return 0;
  }
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array(m)
    .fill()
    .map(() => Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1 || (i === 0 && j === 0)) {
        continue;
      }
      if (i > 0) {
        dp[i][j] = dp[i - 1][j];
      }
      if (j > 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};
