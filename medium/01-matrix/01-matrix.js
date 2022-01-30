/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const result = new Array(mat.length)
    .fill()
    .map((a) => new Array(mat[0].length).fill(Number.MAX_SAFE_INTEGER));
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        result[i][j] = 0;
      } else {
        if (i > 0) {
          result[i][j] = Math.min(result[i][j], result[i - 1][j] + 1);
        }
        if (j > 0) {
          result[i][j] = Math.min(result[i][j], result[i][j - 1] + 1);
        }
      }
    }
  }
  for (let i = mat.length - 1; i >= 0; i--) {
    for (let j = mat[0].length - 1; j >= 0; j--) {
      if (i < mat.length - 1) {
        result[i][j] = Math.min(result[i][j], result[i + 1][j] + 1);
      }
      if (j < mat[0].length - 1) {
        result[i][j] = Math.min(result[i][j], result[i][j + 1] + 1);
      }
    }
  }
  return result;
};
