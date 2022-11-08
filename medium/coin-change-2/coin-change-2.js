/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = Array(coins.length + 1)
    .fill()
    .map(() => Array(amount + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= coins.length; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= amount; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= coins[i - 1]) {
        dp[i][j] += dp[i][j - coins[i - 1]];
      }
    }
  }
  return dp[coins.length][amount];
};
