var Trie = function () {
  this.root = { children: {}, value: '', isCompleted: false };
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (char of word) {
    if (!node.children[char]) {
      node.children[char] = {
        children: {},
        value: char,
        isCompleted: false,
      };
    }
    node = node.children[char];
  }
  node.isCompleted = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  return node.isCompleted === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let char of prefix) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
