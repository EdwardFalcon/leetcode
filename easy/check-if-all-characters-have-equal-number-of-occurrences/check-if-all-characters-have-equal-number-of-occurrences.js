/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const map = {};
  for (let char of s) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }
  return new Set(Object.values(map)).size === 1;
};
