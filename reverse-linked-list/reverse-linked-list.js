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
var reverseList = function(head) {
  let newHead = head;
  while(head && head.next) {
      let t = head.next;
      head.next = t.next;
      t.next = newHead;
      newHead = t;
  }
  return newHead;
};