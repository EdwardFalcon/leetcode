/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {    
    if (!root) {
        return [];
    }
    const result = [root.val];
    root.children.forEach(child => {
        result.push(...preorder(child));
    })
    return result;    
};