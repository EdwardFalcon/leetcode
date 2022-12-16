/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let answer = '';
  for (let i = 0; i < s.length; i = i + 2) {
    answer += s[i] + shift(s[i], s[i + 1]);
  }
  return answer;
};

const shift = (char, x) =>
  x ? String.fromCharCode(char.charCodeAt(0) + Number(x)) : '';
