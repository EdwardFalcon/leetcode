/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) {
    return -1;
  }
  const roots = Array(n)
    .fill()
    .map((v, i) => i);
  for (let [a, b] of connections) {
    union(roots, a, b);
  }
  for (let i = 0; i < roots.length; i++) {
    roots[i] = find(roots, i);
  }
  return new Set(roots).size - 1;
};

var find = function (roots, x) {
  let root = roots[x];
  while (roots[root] !== root) {
    root = roots[root];
  }
  return root;
};

var union = function (roots, x, y) {
  let rootX = find(roots, x);
  let rootY = find(roots, y);
  if (rootX !== rootY) {
    roots[rootY] = rootX;
  }
};
