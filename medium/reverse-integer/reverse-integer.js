/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  const isNegative = x < 0;
  x = Math.abs(x);
  while (x !== 0) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (result > 2 ** 31 - 1) {
    return 0;
  }
  return isNegative ? -result : result;
};
