/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (source === destination) {
    return true;
  }
  const graph = Array(n)
    .fill()
    .map(() => []);
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  const visited = new Set([source]);
  const stack = [...graph[source]];
  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) {
      continue;
    }
    if (node === destination) {
      return true;
    }
    visited.add(node);
    stack.push(...graph[node]);
  }
  return false;
};
