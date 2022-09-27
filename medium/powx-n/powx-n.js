/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  const half = myPow(x, Math.abs(Math.floor(n / 2)));
  let result = half * half;
  if (n % 2 !== 0) {
    result = n < 0 ? result / x : result * x;
  }
  return n < 0 ? 1 / result : result;
};
