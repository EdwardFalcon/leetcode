/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const length = mat.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += mat[i][i] + mat[i][length - i - 1];
  }
  if (length % 2 != 0) {
    const mid = Math.floor(length / 2);
    sum -= mat[mid][mid];
  }
  return sum;
};
