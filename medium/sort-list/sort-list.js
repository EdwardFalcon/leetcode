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
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const mid = getMid(head);
  const left = sortList(head);
  const right = sortList(mid);
  return merge(left, right);
};

var merge = function (list1, list2) {
  const dummy = new ListNode();
  let tail = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
      tail = tail.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
      tail = tail.next;
    }
  }
  tail.next = list1 ? list1 : list2;
  return dummy.next;
};

var getMid = function (head) {
  let midPrev = null;
  while (head && head.next) {
    midPrev = midPrev ? midPrev.next : head;
    head = head.next.next;
  }
  const mid = midPrev.next;
  midPrev.next = null;
  return mid;
};
