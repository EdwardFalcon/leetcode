/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  return columnTitle
    .split('')
    .reduce((p, c) => p * 26 + c.charCodeAt(0) - 64, 0);
};
