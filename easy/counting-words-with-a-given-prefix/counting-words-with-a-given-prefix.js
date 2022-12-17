/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  return words.filter((word) => hasPrefix(word, pref)).length;
};

const hasPrefix = (string, prefix) => {
  if (string.length < prefix.length) {
    return false;
  }
  for (let i = 0; i < prefix.length; i++) {
    if (string[i] !== prefix[i]) {
      return false;
    }
  }
  return true;
};
