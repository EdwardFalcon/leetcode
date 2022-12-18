/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  return Math.floor(
    (s.split('').reduce((p, c) => p + (c === letter), 0) / s.length) * 100
  );
};
