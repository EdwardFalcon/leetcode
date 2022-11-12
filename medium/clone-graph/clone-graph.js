/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return null;
  }
  const stack = [];
  stack.push(node);
  const visited = [];
  visited[node.val] = new Node(node.val);
  while (stack.length) {
    const current = stack.pop();
    for (let neighbor of current.neighbors) {
      const key = neighbor.val;
      if (!visited[key]) {
        visited[key] = new Node(key);
        stack.push(neighbor);
      }
      visited[current.val].neighbors.push(visited[key]);
    }
  }
  return visited[node.val];
};
