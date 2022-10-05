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
var diameterOfBinaryTree = function (root) {
  return !root
    ? 0
    : Math.max(
        getHeight(root.left) + getHeight(root.right),
        Math.max(
          diameterOfBinaryTree(root.left),
          diameterOfBinaryTree(root.right)
        )
      );
};

var getHeight = function (root) {
  return !root ? 0 : 1 + Math.max(getHeight(root.left), getHeight(root.right));
};
