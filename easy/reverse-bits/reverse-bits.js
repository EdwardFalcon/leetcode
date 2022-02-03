/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;
  let power = 31;
  while (n) {
    result += (n & 1) << power;
    n = n >>> 1;
    power -= 1;
  }
  return result >>> 0;
};
