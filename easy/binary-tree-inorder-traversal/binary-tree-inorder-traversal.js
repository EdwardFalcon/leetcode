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
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = [];
  let temp = root;
  while (stack.length > 0 || temp) {
    if (temp) {
      stack.push(temp);
      temp = temp.left;
    } else {
      temp = stack.pop();
      result.push(temp.val);
      temp = temp.right;
    }
  }
  return result;
};
