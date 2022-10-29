/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  const result = [];
  for (let word of queries) {
    for (let dict of dictionary) {
      if (diff(word, dict)) {
        result.push(word);
        break;
      }
    }
  }
  return result;
};

const diff = function (word1, word2) {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
    }
    if (count > 2) {
      return false;
    }
  }
  return count <= 2;
};
