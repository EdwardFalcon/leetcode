/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const count = {};
  for (c of s) {
    count[c] = count[c] ? count[c] + 1 : 1;
  }
  let result = 0;
  for (c in count) {
    result += Math.floor(count[c] / 2) * 2;
    if (result % 2 === 0 && count[c] % 2 === 1) {
      result++;
    }
  }
  return result;
};
