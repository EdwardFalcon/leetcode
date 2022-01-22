/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return null;
  }
  let newHead = head;
  while (head.next) {
    const temp = head.next;
    head.next = temp.next;
    temp.next = newHead;
    newHead = temp;
  }
  return newHead;
};
