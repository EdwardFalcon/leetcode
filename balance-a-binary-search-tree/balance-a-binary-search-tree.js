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
 * @return {TreeNode}
 */
 var balanceBST = function(root) {
    const nodes = getNodes(root).sort((a, b) => a - b);
    const tree = getTree(nodes);
    return tree;
};

var getTree = function(nodes) {
    if (!nodes || nodes.length === 0) {
        return null;
    }
    const midIndex = Math.floor(nodes.length / 2);
    const val = nodes[midIndex];
    const leftNodes = nodes.slice(0, midIndex);
    const rightNodes = nodes.slice(midIndex + 1, nodes.length);
    return new TreeNode(val, getTree(leftNodes), getTree(rightNodes));
}

var getNodes = function(root) {
    if (!root) {
        return [];
    }
    return [root.val, ...getNodes(root.right), ...getNodes(root.left)];
}