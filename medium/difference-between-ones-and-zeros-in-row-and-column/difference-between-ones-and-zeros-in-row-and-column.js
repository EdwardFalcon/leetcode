/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const onesRow = Array(m).fill(0);
  const onesCol = Array(n).fill(0);
  const zerosRow = Array(m).fill(0);
  const zerosCol = Array(n).fill(0);
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        onesRow[row]++;
        onesCol[col]++;
      } else {
        zerosRow[row]++;
        zerosCol[col]++;
      }
    }
  }
  const diff = Array(m)
    .fill()
    .map(() => Array(m).fill(0));
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      diff[row][col] =
        onesRow[row] + onesCol[col] - zerosRow[row] - zerosCol[col];
    }
  }
  return diff;
};
