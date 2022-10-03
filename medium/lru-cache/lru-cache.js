/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.head = null;
  this.tail = null;
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1;
  }
  this.shift(key);
  return this.head.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.shift(key);
    this.head.value = value;
    return;
  }
  const node = { value, key, prev: null, next: null };
  this.cache.set(key, node);
  if (!this.head && !this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  if (this.cache.size > this.capacity) {
    const node = this.tail;
    this.cache.delete(node.key);
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

LRUCache.prototype.shift = function (key) {
  const node = this.cache.get(key);
  if (node === this.head) {
    return;
  }
  if (node.prev && node.next) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }
  if (node === this.tail) {
    this.tail = node.prev;
    this.tail.next = null;
  }
  this.head.prev = node;
  node.next = this.head;
  node.prev = null;
  this.head = node;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
