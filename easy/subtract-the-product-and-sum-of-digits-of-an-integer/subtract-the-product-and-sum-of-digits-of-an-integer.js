/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const digits = String(n)
    .split('')
    .map((n) => Number(n));
  const product = digits.reduce((p, c) => p * c);
  const sum = digits.reduce((p, c) => p + c);
  return product - sum;
};
