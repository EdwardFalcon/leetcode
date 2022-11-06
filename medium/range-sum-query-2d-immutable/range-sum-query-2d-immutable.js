/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.sum = Array(matrix.length + 1)
    .fill()
    .map(() => Array(matrix[0].length + 1).fill(0));
  for (let row = 1; row <= matrix.length; row++) {
    for (let col = 1; col <= matrix[0].length; col++) {
      this.sum[row][col] =
        matrix[row - 1][col - 1] +
        this.sum[row - 1][col] +
        this.sum[row][col - 1] -
        this.sum[row - 1][col - 1];
    }
  }
  console.log(this.sum);
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.sum[row2 + 1][col2 + 1] +
    this.sum[row1][col1] -
    this.sum[row1][col2 + 1] -
    this.sum[row2 + 1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
