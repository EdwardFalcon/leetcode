/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  return s.split('').map(toLowerCaseChar).join('');
};

var toLowerCaseChar = function (char) {
  const code = char.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(code + 32);
  }
  return char;
};
