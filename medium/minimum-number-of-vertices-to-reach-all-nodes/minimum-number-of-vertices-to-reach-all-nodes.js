/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const vertices = new Set(edges.map((edge) => edge[1]));
  const result = [];
  for (let i = 0; i < n; i++) {
    if (!vertices.has(i)) {
      result.push(i);
    }
  }
  return result;
};
