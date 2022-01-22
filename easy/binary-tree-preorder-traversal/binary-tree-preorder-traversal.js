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
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const temp = stack.shift();
    result.push(temp.val);
    if (temp.right) {
      stack.unshift(temp.right);
    }
    if (temp.left) {
      stack.unshift(temp.left);
    }
  }
  return result;
};
