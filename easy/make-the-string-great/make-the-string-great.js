/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];
  let pos = 0;
  while (pos < s.length) {
    const char = s[pos];
    if (
      stack.length &&
      Math.abs(stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)) ===
        32
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
    pos++;
  }
  return stack.join('');
};
