/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const result = [];
  while (columnNumber > 0) {
    columnNumber--;
    result.push(String.fromCharCode((columnNumber % 26) + 65));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result.reverse().join('');
};
