/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  return getValue(firstWord) + getValue(secondWord) === getValue(targetWord);
};

const getValue = (str) => {
  return Number(
    str
      .split('')
      .map((char) => char[0].charCodeAt(0) - 97)
      .join('')
  );
};
