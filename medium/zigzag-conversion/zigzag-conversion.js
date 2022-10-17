/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const rows = Array(numRows).fill('');
  let row = 0;
  let offset = 1;
  for (let pos = 0; pos < s.length; pos++) {
    rows[row] += s[pos];
    if (row === 0) {
      offset = 1;
    }
    if (row === numRows - 1) {
      offset = -1;
    }
    row += offset;
  }
  return rows.join('');
};
