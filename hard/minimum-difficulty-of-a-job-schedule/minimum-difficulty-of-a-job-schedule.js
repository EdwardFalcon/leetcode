/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  const len = jobDifficulty.length;
  if (len < d) {
    return -1;
  }
  const dp = Array(d + 1)
    .fill(0)
    .map(() => Array(len + 1).fill(0));
  for (let i = 1; i <= len; i++) {
    dp[1][i] = Math.max(dp[1][i - 1], jobDifficulty[i - 1]);
  }
  for (let i = 2; i <= d; i++) {
    for (let j = i; j <= len; j++) {
      dp[i][j] = Infinity;
      let max = 0;
      for (let k = j; k >= i; k--) {
        max = Math.max(max, jobDifficulty[k - 1]);
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][k - 1] + max);
      }
    }
  }
  return dp[d][len];
};
