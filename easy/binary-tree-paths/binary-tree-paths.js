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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  dfs(root, [], result);
  return result;
};

var dfs = function (root, path, result) {
  if (!root.left && !root.right) {
    path.push(root.val);
    result.push(path.join('->'));
    path.pop();
    return;
  }
  path.push(root.val);
  if (root.left) {
    dfs(root.left, path, result);
  }
  if (root.right) {
    dfs(root.right, path, result);
  }
  path.pop();
};
