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
var findMode = function (root) {
  let answer = [];
  let val = NaN;
  let count = 0;
  let max = -Infinity;
  var search = function (node) {
    if (!node) {
      return;
    }
    search(node.left);
    count = (node.val === val ? count : 0) + 1;
    val = node.val;
    if (count > max) {
      answer = [val];
      max = count;
    } else if (count === max) {
      answer.push(val);
    }

    search(node.right);
  };
  search(root);
  return answer;
};
