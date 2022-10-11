/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  const str = s.split('');
  str.forEach((char, i) => {
    if (char === '(') {
      stack.push(i);
      return;
    }
    if (char === ')') {
      if (stack.length) {
        stack.pop();
      } else {
        str[i] = '';
      }
    }
  });
  stack.forEach((i) => (str[i] = ''));
  return str.join('');
};
