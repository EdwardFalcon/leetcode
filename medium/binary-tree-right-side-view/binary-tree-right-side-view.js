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
var rightSideView = function (root) {
  const result = [];
  bfs(root, result, 0);
  return result;
};

var bfs = function (root, result, height) {
  if (!root) {
    return;
  }
  result[height] = root.val;
  bfs(root.left, result, height + 1);
  bfs(root.right, result, height + 1);
};
