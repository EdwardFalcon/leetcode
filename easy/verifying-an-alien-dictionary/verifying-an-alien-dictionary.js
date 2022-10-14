/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderMap = order.split('').reduce((p, c, i) => {
    p[c] = i;
    return p;
  }, {});
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const char1 = orderMap[words[i][j]];
      const char2 = orderMap[words[i + 1][j]];
      if (char1 < char2) {
        break;
      } else if (char1 === char2) {
        continue;
      }
      return false;
    }
  }
  return true;
};
