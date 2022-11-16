/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let answer = 0;
  const dp = Array(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      answer = Math.max(answer, dp[i]);
    }
  }
  return answer;
};
