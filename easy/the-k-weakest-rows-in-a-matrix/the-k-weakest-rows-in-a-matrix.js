/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  return mat
    .map((row, index) => ({ index, count: row.reduce((p, c) => p + c, 0) }))
    .sort((a, b) => a.count - b.count)
    .map((row) => row.index)
    .slice(0, k);
};
