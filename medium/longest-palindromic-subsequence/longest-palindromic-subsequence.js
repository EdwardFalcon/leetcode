/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const dp = Array(s.length + 1)
    .fill()
    .map(() => Array(s.length + 1).fill(0));
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      if (s[i - 1] === s[s.length - j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[s.length][s.length];
};
