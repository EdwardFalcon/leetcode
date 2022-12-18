/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const set = new Set();
  for (char of s) {
    if (set.has(char)) {
      return char;
    }
    set.add(char);
  }
};
