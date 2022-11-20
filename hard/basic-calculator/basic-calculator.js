/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let res = 0;
  let sum = 0;
  let sign = 1;
  let stack = [];
  stack.push(1);
  const isDigit = (ch) => {
    return ch >= '0' && ch <= '9';
  };
  for (let ch of s) {
    if (isDigit(ch)) {
      sum = sum * 10 + (ch - '0');
    } else {
      res += sum * sign * stack[stack.length - 1];
      sum = 0;
      if (ch === '-') {
        sign = -1;
      } else if (ch === '+') {
        sign = 1;
      } else if (ch === '(') {
        stack.push(stack[stack.length - 1] * sign);
        sign = 1;
      } else if (ch === ')') {
        stack.pop();
      }
    }
  }
  return (res += sign * sum);
};
