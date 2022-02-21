/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let cur = this.head;
  let i = 0;
  while (cur && i <= index) {
    if (cur && i === index) {
      return cur.val;
    }
    cur = cur.next;
    i++;
  }
  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (!this.head) {
    this.head = { val };
  } else {
    this.head = { val, next: this.head };
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.head) {
    this.head = { val };
    return;
  }
  let cur = this.head;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = { val };
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  let cur = this.head;
  let i = 0;
  while (cur && i <= index) {
    if (cur && i === index - 1) {
      const next = cur.next;
      if (next) {
        cur.next = { val, next: next };
      } else {
        cur.next = { val };
      }
    }
    cur = cur.next;
    i++;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index === 0 && this.head) {
    this.head = this.head.next;
    return;
  }
  let cur = this.head;
  let i = 0;
  while (cur && i <= index) {
    if (cur && i === index - 1) {
      const del = cur.next;
      if (del) {
        if (del.next) {
          cur.next = del.next;
        } else {
          cur.next = null;
        }
      }
      return;
    }
    cur = cur.next;
    i++;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
