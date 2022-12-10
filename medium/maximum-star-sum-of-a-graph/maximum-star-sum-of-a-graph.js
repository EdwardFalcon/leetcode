/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function (vals, edges, k) {
  const sums = Array(vals.length).fill().map([]);
  for (let [a, b] of edges) {
    if (vals[a] > 0) {
      sums[b].push(vals[a]);
    }
    if (vals[b] > 0) {
      sums[a].push(vals[b]);
    }
  }
  let max = -Infinity;
  for (let i = 0; i < sums.length; i++) {
    max = Math.max(
      max,
      vals[i] +
        sums[i]
          .sort((a, b) => b - a)
          .slice(0, k)
          .reduce((p, c) => p + c, 0)
    );
  }
  return max;
};
