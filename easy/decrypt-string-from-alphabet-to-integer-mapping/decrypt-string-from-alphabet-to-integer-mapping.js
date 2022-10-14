/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let num = Number(s[i]);
    if (s[i + 2] === '#') {
      num = num * 10 + Number(s[i + 1]);
      i += 2;
    }
    result += String.fromCharCode(96 + num);
  }
  return result;
};
