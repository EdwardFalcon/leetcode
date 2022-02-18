/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode();
  let carry = 0;
  let pointer = dummy;
  while (l1 || l2) {
    const num1 = l1 ? l1.val : 0;
    const num2 = l2 ? l2.val : 0;
    const sum = num1 + num2 + carry;
    pointer.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    pointer = pointer.next;
  }
  if (carry === 1) {
    pointer.next = new ListNode(1);
  }
  return dummy.next;
};
