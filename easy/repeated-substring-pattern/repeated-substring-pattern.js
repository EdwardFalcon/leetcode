/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = Math.floor(s.length / 2); i >= 1; i--) {
    if (s.length % i !== 0) {
      continue;
    }
    const mid = s.length / i;
    const subStr = s.substring(0, i);
    const newStr = subStr.repeat(mid);
    if (newStr === s) {
      return true;
    }
  }
  return false;
};
