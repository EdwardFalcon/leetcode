/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  let result = new Array(n);
  let list = new Array(n).fill().map(() => []);
  for (let x of edges) {
    list[x[0]].push(x[1]);
    list[x[1]].push(x[0]);
  }
  dfs(-1, 0, list, labels, result);
  return result;
};

function dfs(prev, curr, a, labels, array) {
  const result = new Array(26).fill(0);
  for (let x of a[curr]) {
    if (prev !== x) {
      const res = dfs(curr, x, a, labels, array);
      for (let i = 0; i < 26; i++) {
        result[i] += res[i];
      }
    }
  }
  array[curr] = ++result[labels.charCodeAt(curr) - 'a'.charCodeAt(0)];
  return result;
}
