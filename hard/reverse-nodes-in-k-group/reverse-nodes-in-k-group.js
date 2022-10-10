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
var reverseKGroup = function (head, k) {
  let length = getLength(head);
  if (k > length) {
    return head;
  }
  let dummy = new ListNode();
  while (length >= k) {
    const [first, second] = sliceList(head, k);
    dummy = appendList(dummy, reverseList(first));
    head = second;
    length -= k;
  }
  dummy = appendList(dummy, head);
  return dummy.next;
};

var getLength = function (head) {
  let length = 0;
  let temp = head;
  while (temp) {
    length++;
    temp = temp.next;
  }
  return length;
};

var reverseList = function (head) {
  const dummy = new ListNode();
  while (head) {
    const temp = head;
    head = head.next;
    temp.next = dummy.next;
    dummy.next = temp;
  }
  return dummy.next;
};

var sliceList = function (head, k) {
  let i = 1;
  let temp = head;
  while (temp.next && i < k) {
    temp = temp.next;
    i++;
  }
  const head2 = temp.next;
  temp.next = null;
  return [head, head2];
};

var appendList = function (head1, head2) {
  let last = head1;
  while (last.next) {
    last = last.next;
  }
  last.next = head2;
  return head1;
};
