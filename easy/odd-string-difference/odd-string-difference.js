/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  for (let i = 1; i < words[0].length; i++) {
    const map = {};
    for (let word of words) {
      const diff = word.charCodeAt(i) - word.charCodeAt(i - 1);
      if (!map[diff]) {
        map[diff] = [];
      }
      map[diff].push(word);
    }
    for (let key in map) {
      if (map[key].length === 1) {
        return map[key][0];
      }
    }
  }
};
