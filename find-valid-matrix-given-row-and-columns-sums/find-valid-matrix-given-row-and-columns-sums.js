/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
 var restoreMatrix = function(rowSum, colSum) {
    const rowLength = rowSum.length;
    const colLength = colSum.length;
    const result = new Array(rowLength).fill(0).map(() => new Array(colLength).fill(0));
    for (let i = 0; i < rowLength; i++)
        for (let j = 0; j < colLength; j++){
            const temp = Math.min(rowSum[i],colSum[j]);
            result[i][j] = temp;
            rowSum[i] -= temp;
            colSum[j] -= temp;
        }
    return result;
};