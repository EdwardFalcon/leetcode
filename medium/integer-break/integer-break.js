/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n < 5) {
    return 2 ** (n - 2);
  }
  const reminder = n % 3;
  if (reminder === 0) {
    return 3 ** (n / 3);
  }
  const threeAmount = Math.floor(n / 3);
  if (reminder === 1) {
    return 3 ** (threeAmount - 1) * (threeAmount > 1 ? 4 : 2);
  }
  if (reminder === 2) {
    return 3 ** threeAmount * 2;
  }
};
