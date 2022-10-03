/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < dp.length; i++) {
    if (!dp[i]) {
      continue;
    }
    for (let word of wordDict) {
      if (s.slice(i, i + word.length) === word) {
        if (i + word.length <= dp.length) {
          dp[i + word.length] = true;
        }
      }
    }
  }
  return dp[s.length];
};
