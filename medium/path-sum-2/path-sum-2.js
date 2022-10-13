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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  const currentPath = [];
  dfs(root, targetSum, 0, currentPath, result);
  return result;
};

var dfs = function (root, targetSum, currentSum, currentPath, result) {
  if (!root) {
    return;
  }
  currentSum += root.val;
  if (!root.left && !root.right && currentSum === targetSum) {
    result.push([...currentPath, root.val]);
    return;
  }
  currentPath.push(root.val);
  dfs(root.left, targetSum, currentSum, currentPath, result);
  dfs(root.right, targetSum, currentSum, currentPath, result);
  currentPath.pop();
};
