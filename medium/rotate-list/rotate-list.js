/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }
  let length = 1;
  let oldlastPointer = head;
  while (oldlastPointer.next) {
    oldlastPointer = oldlastPointer.next;
    length++;
  }
  const offset = k % length;
  if (offset === 0) {
    return head;
  }
  const newLastIndex = length - offset;
  let newLastPointer = head;
  for (let i = 1; i < newLastIndex; i++) {
    newLastPointer = newLastPointer.next;
  }
  const newHeadPointer = newLastPointer.next;
  oldlastPointer.next = head;
  newLastPointer.next = null;
  return newHeadPointer;
};
