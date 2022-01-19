/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const hash = new Set();
  let pointer = head;
  while (pointer) {
    if (hash.has(pointer)) {
      return true;
    }
    hash.add(pointer);
    pointer = pointer.next;
  }
  return false;
};
