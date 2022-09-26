/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const dummy = new ListNode();
  merge(lists, dummy);
  return dummy.next;
};

var merge = function (lists, start) {
  if (lists.length === 0) {
    return;
  }
  let min = Infinity;
  let pos = -1;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] && lists[i].val < min) {
      min = lists[i].val;
      pos = i;
    }
  }
  if (pos === -1) {
    return;
  }
  if (lists[pos].next) {
    lists[pos] = lists[pos].next;
  } else {
    lists.splice(pos, 1);
  }
  start.next = new ListNode(min);
  merge(lists, start.next);
};
