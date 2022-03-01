/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const hash = {};
  for (char of s) {
    hash[char] = hash[char] + 1 || 1;
  }
  return Object.entries(hash)
    .sort((a, b) => b[1] - a[1])
    .map((c) => c[0].repeat(c[1]))
    .join('');
};
