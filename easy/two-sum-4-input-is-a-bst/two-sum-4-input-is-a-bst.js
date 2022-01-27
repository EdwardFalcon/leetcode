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
 * @return {boolean}
 */
var findTarget = function (root, k, node = root) {
  if (node === null) {
    return false;
  }
  return (
    findTarget(root, k, node.left) ||
    findTarget(root, k, node.right) ||
    findSecond(node, k - node.val, root)
  );
};

function findSecond(root, second, node) {
  if (node === null) {
    return false;
  }
  if (node !== root && second === node.val) {
    return true;
  }
  return findSecond(root, second, node.val < second ? node.right : node.left);
}
