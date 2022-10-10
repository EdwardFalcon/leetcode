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
var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  return (
    Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return 1 + maxDepth(root.right);
  }
  if (!root.right) {
    return 1 + maxDepth(root.left);
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
