/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = [];
  const dfs = (node) => {
    if (!node) {
      return;
    }
    if (!node.children.length) {
      result.push(node.val);
      return;
    }
    node.children.forEach((child) => dfs(child));
    result.push(node.val);
  };
  dfs(root);
  return result;
};
