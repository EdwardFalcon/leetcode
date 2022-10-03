/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let currentOriginal = head;
  while (currentOriginal) {
    const nextOriginal = currentOriginal.next;
    currentOriginal.next = new Node(currentOriginal.val);
    currentOriginal.next.next = nextOriginal;
    currentOriginal = nextOriginal;
  }
  currentOriginal = head;
  while (currentOriginal) {
    if (currentOriginal.random) {
      currentOriginal.next.random = currentOriginal.random.next;
    }
    currentOriginal = currentOriginal.next.next;
  }
  currentOriginal = head;
  const dummy = new Node();
  let currentNew = dummy;
  while (currentOriginal) {
    const nextOriginal = currentOriginal.next.next;
    currentNew.next = currentOriginal.next;
    currentNew = currentNew.next;
    currentOriginal.next = nextOriginal;
    currentOriginal = nextOriginal;
  }
  return dummy.next;
};
