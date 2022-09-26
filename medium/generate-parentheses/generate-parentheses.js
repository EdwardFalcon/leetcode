/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const current = [];
  const result = [];
  function backtrace(n, open) {
    if (n === 0 && open === 0) {
      result.push(current.join(''));
      return result;
    }
    if (open > 0) {
      current.push(')');
      backtrace(n, open - 1);
      current.pop();
    }
    if (n > 0) {
      current.push('(');
      backtrace(n - 1, open + 1);
      current.pop();
    }
    return result;
  }
  return backtrace(n, 0);
};
