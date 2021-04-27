/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            count += check(matrix, i, j, 0);
        }

    }
    return count;
};

var check = function (matrix, i, j, len) {
    if (i + len >= matrix.length || j + len >= matrix[0].length) {
        return 0;
    }
    for (let m = i; m <= i + len; m++) {
        for (let n = j; n <= j + len; n++) {
            if (matrix[m][n] !== 1) {
                return 0;
            }
        }
    }
    return 1 + check(matrix, i, j, len + 1);
}