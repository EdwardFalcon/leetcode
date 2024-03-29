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
var isValidBST = function (root, min, max) {
  if (!root) {
    return true;
  }
  const val = root.val;
  if (min !== undefined && val >= min) {
    return false;
  }
  if (max !== undefined && val <= max) {
    return false;
  }
  return isValidBST(root.left, val, max) && isValidBST(root.right, min, val);
};
