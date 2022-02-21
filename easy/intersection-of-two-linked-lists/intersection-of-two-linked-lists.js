/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pointerA = headA;
  let pointerB = headB;
  while (pointerA || pointerB) {
    pointerA = pointerA || headB;
    pointerB = pointerB || headA;
    if (pointerA === pointerB) {
      return pointerA;
    }
    pointerA = pointerA.next;
    pointerB = pointerB.next;
  }
  return null;
};
