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
 * @return {boolean}
 */
var evaluateTree = function (root) {
  const dfs = (node) => {
    if (!node.left && !node.right) {
      return node.val === 1;
    }
    if (node.val === 2) {
      return dfs(node.left) || dfs(node.right);
    }
    if (node.val === 3) {
      return dfs(node.left) && dfs(node.right);
    }
  };
  return dfs(root);
};
