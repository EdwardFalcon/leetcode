/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let count = 0;
  const map = {};
  for (let word of words) {
    map[word] = map[word] ? map[word] + 1 : 1;
  }
  let odd = 0;
  for (let word in map) {
    if (!map[word]) {
      continue;
    }
    const revWord = word[1] + word[0];
    if (word === revWord) {
      if (map[word] % 2 != 0) {
        odd = 1;
      }
      count += Math.floor(map[word] / 2) * 4;
    } else if (map[revWord]) {
      count += Math.min(map[word], map[revWord]) * 4;
      map[revWord] = 0;
    }
    map[word] = 0;
  }
  return count + odd * 2;
};
