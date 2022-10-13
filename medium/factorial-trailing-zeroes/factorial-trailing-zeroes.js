/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n, count = 0) {
  if (n === 0) {
    return count;
  }
  n = Math.floor(n / 5);
  return trailingZeroes(n, count + n);
};
