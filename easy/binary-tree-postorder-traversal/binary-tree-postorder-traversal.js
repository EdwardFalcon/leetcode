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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const temp = stack.shift();
    result.unshift(temp.val);
    if (temp.left) {
      stack.unshift(temp.left);
    }
    if (temp.right) {
      stack.unshift(temp.right);
    }
  }
  return result;
};
