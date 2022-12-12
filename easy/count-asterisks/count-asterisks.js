/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  return (a = s
    .split('|')
    .filter((_, i) => (i + 1) % 2 !== 0)
    .map((str) => str.replaceAll(/\w/gi, ''))
    .join('').length);
};
