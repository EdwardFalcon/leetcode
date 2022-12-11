/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const dict = {};
  let code = 97;
  for (let char of key) {
    if (dict[char] || char === ' ') {
      continue;
    }
    dict[char] = String.fromCharCode(code);
    code++;
  }
  return message
    .split('')
    .map((char) => dict[char] || ' ')
    .join('');
};
