/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let num = 0;
  let op = '+';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (i !== s.length - 1) {
        continue;
      }
    }
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      num = num * 10 + Number(s[i]);
      if (i !== s.length - 1) {
        continue;
      }
    }
    if (op === '-') {
      stack.push(-num);
    }
    if (op === '+') {
      stack.push(num);
    }
    if (op === '*') {
      stack.push(stack.pop() * num);
    }
    if (op === '/') {
      stack.push(parseInt(String(stack.pop() / num)));
    }
    op = s[i];
    num = 0;
  }
  let result = 0;
  while (stack.length) {
    result += stack.pop();
  }
  return result;
};
