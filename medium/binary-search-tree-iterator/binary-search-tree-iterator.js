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
 */
var BSTIterator = function (root) {
  this.stack = [];
  traverse(root, this.stack);
};

var traverse = function (root, stack) {
  if (!root) {
    return;
  }
  traverse(root.left, stack);
  stack.push(root.val);
  traverse(root.right, stack);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.stack.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
