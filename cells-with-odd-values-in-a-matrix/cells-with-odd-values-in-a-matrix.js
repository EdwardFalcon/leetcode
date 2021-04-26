/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
    const rows = Array(m).fill(0);
    const columns = Array(n).fill(0);
    for (let i = 0; i < indices.length; i++) {
        rows[indices[i][0]]++;
        columns[indices[i][1]]++;
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((rows[i] + columns[j]) % 2 !== 0) {
                count++;
            }
        }
    }
    return count;

};