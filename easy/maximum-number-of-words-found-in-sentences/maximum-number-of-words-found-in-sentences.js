/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  return sentences
    .map((sentence) => sentence.split(' ').length)
    .reduce((p, c) => Math.max(p, c));
};
