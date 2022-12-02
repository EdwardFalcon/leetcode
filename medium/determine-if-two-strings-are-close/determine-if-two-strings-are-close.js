/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const arr1 = sortAndCount(word1);
  const arr2 = sortAndCount(word2);

  for (let i = 0; i < arr1.chars.length; i++) {
    if (arr1.chars[i] !== arr2.chars[i] || arr1.counts[i] !== arr2.counts[i]) {
      return false;
    }
  }

  return true;
};

function sortAndCount(word) {
  const map = word.split('').reduce((p, c) => {
    if (p[c] === undefined) {
      p[c] = 0;
    }
    p[c]++;
    return p;
  }, {});
  return {
    chars: Object.keys(map).sort(),
    counts: Object.values(map).sort((a, b) => a - b),
  };
}
