/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  const midIndex = Math.floor(nums.length / 2);
  const leftNode = sortedArrayToBST(nums.slice(0, midIndex));
  const rightNode = sortedArrayToBST(nums.slice(midIndex + 1, nums.length));
  return new TreeNode(nums[midIndex], leftNode, rightNode);
};
