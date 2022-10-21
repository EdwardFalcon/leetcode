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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  return dfs(root, null);
};

var dfs = function (root, tail) {
  if (!root) {
    return tail;
  }
  const res = dfs(root.left, root);
  root.left = null;
  root.right = dfs(root.right, tail);
  return res;
};
