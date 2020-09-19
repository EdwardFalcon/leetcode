/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let result = '';
  for (char of str) {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
          result += String.fromCharCode(code + 32);
          continue;
      }
      result += char;
  }
  return result;
};