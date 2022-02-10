/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let reverse = null;
  let pointer = head;
  while (pointer) {
    reverse = new ListNode(pointer.val, reverse);
    pointer = pointer.next;
  }
  while (reverse && head) {
    if (reverse.val !== head.val) {
      return false;
    }
    reverse = reverse.next;
    head = head.next;
  }
  return true;
};
