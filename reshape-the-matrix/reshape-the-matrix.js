/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length != r * c) {
    return mat;
  }
  let rowPointer = 0;
  let colPointer = 0;
  const resultArray = [];
  for (let i = 0; i < r; i++) {
    const tempRow = [];
    for (let j = 0; j < c; j++) {
      tempRow.push(mat[rowPointer][colPointer]);
      colPointer++;
      if (colPointer > mat[0].length - 1) {
        colPointer = 0;
        rowPointer++;
      }
    }
    resultArray.push(tempRow);
  }
  return resultArray;
};
