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
var oddEvenList = function (head) {
  if (!head) {
    return head;
  }
  let odd = head;
  let even = head.next;
  let evenStart = even;
  while (even) {
    if (even.next) {
      odd.next = even.next;
      odd = even.next;
      even.next = even.next.next;
    }
    even = even.next;
  }
  odd.next = evenStart;
  return head;
};
