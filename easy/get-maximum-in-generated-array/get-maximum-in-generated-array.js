/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n < 2) {
    return n;
  }
  const dp = [0, 1];
  let answer = 1;
  for (let i = 2; i < n; i += 2) {
    dp[i] = dp[i / 2];
    dp[i + 1] = dp[i / 2] + dp[i / 2 + 1];
    answer = Math.max(answer, dp[i], dp[i + 1]);
  }
  return answer;
};
