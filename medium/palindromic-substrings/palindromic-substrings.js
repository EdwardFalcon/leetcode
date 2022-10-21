/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let result = 0;
  const dp = Array(s.length)
    .fill()
    .map(() => Array(s.length).fill(false));
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      dp[i][j] = s[i] == s[j] && (j - i + 1 < 3 || dp[i + 1][j - 1]);
      if (dp[i][j]) {
        result++;
      }
    }
  }
  return result;
};
