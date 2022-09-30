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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const levels = [];
  var bst = function (node, level) {
    if (levels.length == level) {
      levels.push([]);
    }
    if (level % 2 === 0) {
      levels[level].push(node.val);
    } else {
      levels[level].unshift(node.val);
    }
    if (node.left) {
      bst(node.left, level + 1);
    }
    if (node.right) {
      bst(node.right, level + 1);
    }
  };
  if (!root) {
    return levels;
  }
  bst(root, 0);
  return levels;
};
