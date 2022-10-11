/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (const char of s) {
    if (char !== ']') {
      stack.push(char);
      continue;
    }

    let currentString = '';
    let currentLength = '';
    let stackChar = stack.pop();

    while (stackChar !== '[') {
      currentString = stackChar + currentString;
      stackChar = stack.pop();
    }

    stackChar = stack.pop();
    while (!isNaN(stackChar)) {
      currentLength = stackChar + currentLength;
      stackChar = stack.pop();
    }

    stack.push(stackChar);
    stack.push(currentString.repeat(Number(currentLength)));
  }
  return stack.join('');
};
