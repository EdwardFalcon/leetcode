/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const isUpperCase = word === word.toUpperCase();
  const isLowerCase = word === word.toLowerCase();
  const isCapitalized =
    word[0] === word[0].toUpperCase() &&
    word.substr(1) === word.substr(1).toLowerCase();
  return isUpperCase || isLowerCase || isCapitalized;
};
