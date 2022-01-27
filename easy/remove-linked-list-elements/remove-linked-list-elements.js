/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const nullHead = new ListNode(null, head);
  let pointer = nullHead;
  while (pointer && pointer.next) {
    if (pointer.next.val === val) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }
  return nullHead.next;
};
