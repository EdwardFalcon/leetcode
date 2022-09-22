/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let sign = 1;
  let num = 0;
  let i = 0;
  while (s[i] === ' ') {
    i++;
  }
  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }
  while (i < s.length) {
    const code = s.charCodeAt(i) - 48;
    if (code < 0 || code > 9) {
      break;
    }
    num = num * 10 + code;
    i++;
  }
  num *= sign;
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, num));
};
