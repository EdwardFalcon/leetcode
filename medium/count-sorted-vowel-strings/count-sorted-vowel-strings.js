/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  const dp = Array(5).fill(1);
  for (let i = 2; i <= n; i++) {
    dp[0] = dp[0] + dp[1] + dp[2] + dp[3] + dp[4];
    dp[1] = dp[1] + dp[2] + dp[3] + dp[4];
    dp[2] = dp[2] + dp[3] + dp[4];
    dp[3] = dp[3] + dp[4];
  }
  console.log(dp);
  return dp.reduce((p, c) => p + c, 0);
};
