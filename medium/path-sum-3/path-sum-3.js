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
 * @param {number} targetSum
 * @return {number}
 */
// var ans = 0;

var pathSum = function (root, targetSum) {
  if (!root) {
    return 0;
  }
  return (
    search(root, targetSum, root.val) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );
};

var search = function (root, targetSum, currentSum) {
  if (!root) {
    return 0;
  }
  return (
    (currentSum === targetSum) +
    search(root.left, targetSum, currentSum + root.left?.val) +
    search(root.right, targetSum, currentSum + root.right?.val)
  );
};
