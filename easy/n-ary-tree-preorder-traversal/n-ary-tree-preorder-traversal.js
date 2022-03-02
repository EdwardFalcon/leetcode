/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const result = [];
  dfs(root, result);
  return result;
};

var dfs = function (root, arr) {
  if (!root) {
    return;
  }
  arr.push(root.val);
  root.children.forEach((child) => dfs(child, arr));
};
