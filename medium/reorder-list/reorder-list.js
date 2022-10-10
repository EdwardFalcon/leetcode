/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const stack = [];
  let current = null;
  while (head) {
    current = head;
    head = current.next;
    current.next = null;
    stack.push(current);
  }
  let fromDown = true;
  const dummy = new ListNode();
  current = dummy;
  while (stack.length) {
    current.next = fromDown ? stack.shift() : stack.pop();
    fromDown = !fromDown;
    current = current.next;
  }
  return dummy.next;
};
