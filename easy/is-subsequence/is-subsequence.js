/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pos = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] == s[pos] && pos < s.length) {
      pos++;
    }
  }
  return pos === s.length;
};
