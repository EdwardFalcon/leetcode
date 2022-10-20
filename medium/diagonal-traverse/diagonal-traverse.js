/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const n = mat.length;
  const m = mat[0].length;
  const result = [];
  for (let i = 0; i < n + m - 1; i++) {
    const temp = [];
    let row = i < m ? 0 : i - m + 1;
    let col = i < m ? i : m - 1;
    while (row < n && col > -1) {
      temp.push(mat[row++][col--]);
    }
    if (i % 2 === 0) {
      temp.reverse();
    }
    result.push(...temp);
  }
  return result;
};
