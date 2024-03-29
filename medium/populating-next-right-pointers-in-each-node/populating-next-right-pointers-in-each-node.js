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
  const left = root.left;
  const right = root.right;
  if (left) {
    left.next = root.right;
  }
  if (right && root.next) {
    right.next = root.next.left;
  }
  connect(right);
  connect(left);
  return root;
};
