/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sCount = new Array(26).fill(0);
  const tCount = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    sCount[s.charCodeAt(i) - 97] += 1;
    tCount[t.charCodeAt(i) - 97] += 1;
  }
  for (let i = 0; i < 26; i++) {
    if (sCount[i] !== tCount[i]) {
      return false;
    }
  }
  return true;
};
