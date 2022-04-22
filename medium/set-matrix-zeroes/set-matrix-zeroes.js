/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let isCol = false;
  for (let row = 0; row < rows; row++) {
    if (matrix[row][0] === 0) {
      isCol = true;
    }
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }
  if (isCol) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }
};
