/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let result = 0;
  const sign = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  const originalDivisor = divisor;
  while (divisor < dividend) {
    const shift = divisor << 1;
    if (shift > dividend || shift <= 0) {
      break;
    }
    if (result === 0) {
      result = 2;
    } else {
      result = result << 1;
    }
    divisor = shift;
  }
  while (divisor + originalDivisor <= dividend) {
    divisor += originalDivisor;
    result++;
  }
  if (result === 0 && dividend - divisor >= 0) {
    result = 1;
  }
  result = sign ? -result : result;
  const min = (-2) ** 31;
  const max = 2 ** 31 - 1;
  if (result < min) {
    return min;
  }
  if (result > max) {
    return max;
  }
  return result;
};
