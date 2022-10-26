/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  const n = target.length;
  let rotate = Array(4).fill(true);
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] !== target[col][n - row - 1]) {
        rotate[0] = false;
      }
      if (mat[row][col] !== target[n - row - 1][n - col - 1]) {
        rotate[1] = false;
      }
      if (mat[row][col] !== target[n - col - 1][row]) {
        rotate[2] = false;
      }
      if (mat[row][col] !== target[row][col]) {
        rotate[3] = false;
      }
    }
  }
  return rotate.some(Boolean);
};
