/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += dp[j] * dp[i - j - 1];
    }
    dp[i] = sum;
  }
  return dp[n];
};
