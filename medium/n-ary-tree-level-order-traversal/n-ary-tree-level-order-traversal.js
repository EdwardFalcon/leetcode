/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  bfs(root, result, 0);
  return result;
};

var bfs = function (root, result, h) {
  if (!root) {
    return;
  }
  if (!result[h]) {
    result[h] = [];
  }
  result[h].push(root.val);
  if (root.children) {
    for (let child of root.children) {
      bfs(child, result, h + 1);
    }
  }
};
