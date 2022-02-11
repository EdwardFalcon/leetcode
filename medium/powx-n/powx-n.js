/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0 || (x < 0 && n < 0)) {
    return 1;
  }
  if (n < 0) {
    if (n == Integer.MIN_SAFE_INTEGER) {
      n = Integer.MAX_SAFE_INTEGER;
      x = 1 / x;
    } else {
      n = -n;
      x = 1 / x;
    }
  }
  const j = myPow(x, n / 2);
  result = j * j;
  if (n % 2 == 1) {
    result = result * x;
  }
  return result;
};
