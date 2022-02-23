/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preorderIndex = 0;

  const inorderIndexMap = {};

  for (let i = 0; i < inorder.length; i++) {
    inorderIndexMap[inorder[i]] = i;
  }

  var arrayToTree = function (preorder, left, right) {
    if (left > right) {
      return null;
    }
    const rootValue = preorder[preorderIndex++];
    const root = new TreeNode(rootValue);

    root.left = arrayToTree(preorder, left, inorderIndexMap[rootValue] - 1);
    root.right = arrayToTree(preorder, inorderIndexMap[rootValue] + 1, right);
    return root;
  };

  return arrayToTree(preorder, 0, preorder.length - 1);
};
