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
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
  if (!root) {
    return null;
  }
  if (root.val == key) {
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }
    const minNode = getMinNode(root.right);
    root.right = deleteNode(root.right, minNode.val);
    [minNode.left, minNode.right] = [root.left, root.right];
    return minNode;
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }
  return root;
}

var getMinNode = function (root) {
  while (root.left !== null) {
    root = root.left;
  }
  return root;
};
