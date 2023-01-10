/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = arr.reduce((p, c) => {
    if (!p[c]) {
      p[c] = 0;
    }
    p[c]++;
    return p;
  }, {});
  return Object.keys(map).length === new Set(Object.values(map)).size;
};
