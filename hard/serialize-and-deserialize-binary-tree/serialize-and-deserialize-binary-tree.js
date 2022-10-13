/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const result = [];
  serializeHelper(root, result);
  return result.join(',');
};

var serializeHelper = function (root, result) {
  if (!root) {
    result.push('null');
    return;
  }
  result.push(root.val);
  serializeHelper(root.left, result);
  serializeHelper(root.right, result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.split(',');
  return deserializeHelper(arr);
};

var deserializeHelper = function (arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr[0] === 'null') {
    arr.shift();
    return null;
  }
  const node = new TreeNode(arr.shift());
  node.left = deserializeHelper(arr);
  node.right = deserializeHelper(arr);
  return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
