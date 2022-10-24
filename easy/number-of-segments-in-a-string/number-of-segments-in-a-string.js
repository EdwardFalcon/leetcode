/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let segments = s[0] && s[0] !== ' ' ? 1 : 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== ' ' && s[i - 1] === ' ') {
      segments++;
    }
  }
  return segments;
};
