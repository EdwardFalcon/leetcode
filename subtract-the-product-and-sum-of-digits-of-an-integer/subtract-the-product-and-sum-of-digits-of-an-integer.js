/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const digits = String(n).split('').map(d => Number(d));
  const product = digits.reduce((p, c) => p * c, 1);
  const sum = digits.reduce((p, c) => p + c, 0);
  return product - sum;
};