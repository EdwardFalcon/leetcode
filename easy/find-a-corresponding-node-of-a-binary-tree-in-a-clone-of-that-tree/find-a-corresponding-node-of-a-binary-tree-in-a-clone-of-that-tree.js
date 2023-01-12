/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  let answer;
  const dfs = (original, cloned) => {
    if (original !== null) {
      dfs(original.left, cloned.left);
      if (original === target) {
        answer = cloned;
      }
      dfs(original.right, cloned.right);
    }
  };
  dfs(original, cloned);
  return answer;
};
