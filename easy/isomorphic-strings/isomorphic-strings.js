/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  hashS = {};
  hashT = {};
  for (let i = 0; i < s.length; i++) {
    if (!hashS[s[i]] && !hashT[t[i]]) {
      hashS[s[i]] = t[i];
      hashT[t[i]] = s[i];
    } else if (hashS[s[i]] !== t[i] || hashT[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};
