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
  let carry = 0;
  const dummy = new ListNode();
  let current = dummy;
  while (l1 || l2 || carry) {
    const dig1 = l1 ? l1.val : 0;
    const dig2 = l2 ? l2.val : 0;
    let sum = dig1 + dig2 + carry;
    carry = sum >= 10 ? 1 : 0;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    current.next = new ListNode(sum % 10);
    current = current.next;
  }
  return dummy.next;
};
