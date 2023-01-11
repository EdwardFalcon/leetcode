/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const set = new Set(brokenLetters);
  const words = text.split(' ');
  let notTyped = 0;
  for (let word of words) {
    for (let letter of word) {
      if (set.has(letter)) {
        notTyped++;
        break;
      }
    }
  }
  return words.length - notTyped;
};
