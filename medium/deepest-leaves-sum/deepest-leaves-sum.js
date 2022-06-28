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
var deepestLeavesSum = function (root) {
  const deepestLevel = getDeepestLevel(root);
  return getLeavesSum(root, deepestLevel, 1);
};

var getDeepestLevel = function (node) {
  if (!node) {
    return 0;
  }
  return 1 + Math.max(getDeepestLevel(node.left), getDeepestLevel(node.right));
};

var getLeavesSum = function (node, deepestLevel, startLevel) {
  if (!node) {
    return 0;
  }
  if (startLevel === deepestLevel) {
    return node.val;
  }
  return (
    getLeavesSum(node.left, deepestLevel, startLevel + 1) +
    getLeavesSum(node.right, deepestLevel, startLevel + 1)
  );
};
