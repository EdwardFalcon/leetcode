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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  helper(root, stack, k);
  return stack.pop();
};

var helper = function (root, stack, k) {
  if (!root) {
    return;
  }
  helper(root.left, stack, k);
  if (stack.length === k) {
    return;
  }
  stack.push(root.val);
  if (stack.length === k) {
    return;
  }
  helper(root.right, stack, k);
};
