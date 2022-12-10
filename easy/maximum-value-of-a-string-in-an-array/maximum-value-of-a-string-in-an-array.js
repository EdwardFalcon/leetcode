/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  return strs
    .map((str) => (isNaN(Number(str)) ? str.length : Number(str)))
    .reduce((p, c) => Math.max(p, c), 0);
};
