/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] != '0' ? 1 : 0;
  for (let i = 2; i <= s.length; i++) {
    const first = Number(s.substr(i - 1, 1));
    const second = Number(s.substr(i - 2, 2));
    if (first >= 1 && first <= 9) {
      dp[i] += dp[i - 1];
    }
    if (second >= 10 && second <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
};
