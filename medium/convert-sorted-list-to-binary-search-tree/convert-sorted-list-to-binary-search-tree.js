/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) {
    return null;
  }
  return getTree(head, null);
};

const getTree = (head, tail) => {
  let slow = head;
  let fast = head;
  if (head === tail) {
    return null;
  }
  while (fast !== tail && fast.next !== tail) {
    fast = fast.next.next;
    slow = slow.next;
  }
  const newHead = new TreeNode(slow.val);
  newHead.left = getTree(head, slow);
  newHead.right = getTree(slow.next, tail);
  return newHead;
};
