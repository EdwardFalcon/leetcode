/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const row = [1];
  for (let k = 1; k <= rowIndex; k++) {
    row.push((row[row.length - 1] * (rowIndex - k + 1)) / k);
  }
  return row;
};
