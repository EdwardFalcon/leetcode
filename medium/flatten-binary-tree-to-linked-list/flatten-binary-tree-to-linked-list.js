/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const stack = [];
  dfs(root, stack);
  for (let i = 0; i < stack.length; i++) {
    stack[i].left = null;
    stack[i].right = stack[i + 1] || null;
  }
};

var dfs = function (root, stack) {
  if (!root) {
    return;
  }
  stack.push(root);
  dfs(root.left, stack);
  dfs(root.right, stack);
};
