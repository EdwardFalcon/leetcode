var MyHashMap = function () {
  this.nodes = new Array(100000);
};

MyHashMap.prototype.getHash = function (key) {
  return key % 100000;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const hash = this.getHash(key);
  let node = this.nodes[hash];
  if (!node) {
    this.nodes[hash] = { key, value };
    return;
  }
  while (node) {
    if (node.key === key) {
      node.value = value;
      return;
    }
    if (!node.next) {
      node.next = { key, value };
      return;
    }
    node = node.next;
  }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const hash = this.getHash(key);
  let node = this.nodes[hash];
  if (!node) {
    return -1;
  }
  while (node) {
    if (node.key === key) {
      return node.value;
    }
    node = node.next;
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const hash = this.getHash(key);
  let node = this.nodes[hash];
  if (!node) {
    return;
  }
  const dummy = { next: node };
  node = dummy;
  while (node.next) {
    if (node.next.key === key) {
      node.next = node.next.next;
    }
  }
  this.nodes[hash] = dummy.next;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
