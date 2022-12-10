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
 * @return {number}
 */
var maxProduct = function (root) {
  const subs = [];
  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      return node.val;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    subs.push(left, right);
    return left + right + node.val;
  };
  const total = dfs(root);
  const max = subs.reduce((p, c) => Math.max(p, c * (total - c)), 0);
  return max % (10 ** 9 + 7);
};
