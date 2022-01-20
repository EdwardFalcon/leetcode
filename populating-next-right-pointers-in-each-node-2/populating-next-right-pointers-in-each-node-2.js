/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }
  if (root.left) {
    root.left.next = root.right || getNext(root.next);
  }
  if (root.right) {
    root.right.next = getNext(root.next);
  }
  connect(root.right);
  connect(root.left);
  return root;
};

var getNext = function (node) {
  if (!node) {
    return null;
  }
  return node.left || node.right || getNext(node.next);
};
