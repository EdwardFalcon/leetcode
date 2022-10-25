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
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  const index = getMaxIndex(nums);
  return new TreeNode(
    nums[index],
    constructMaximumBinaryTree(nums.slice(0, index)),
    constructMaximumBinaryTree(nums.slice(index + 1))
  );
};

var getMaxIndex = function (nums) {
  let max = nums[0];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }
  return index;
};
