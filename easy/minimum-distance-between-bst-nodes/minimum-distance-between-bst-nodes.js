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
var minDiffInBST = function (root) {
  return getDiff(root, -Infinity, Infinity);
};

var getDiff = function (node, min, max) {
  if (!node) {
    return max - min;
  }
  const leftDiff = getDiff(node.left, min, node.val);
  const rightDiff = getDiff(node.right, node.val, max);
  return Math.min(leftDiff, rightDiff);
};
