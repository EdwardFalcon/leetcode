/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (!carry) {
      return digits;
    }
    if (digits[i] < 9) {
      digits[i]++;
      carry = 0;
    } else {
      digits[i] = 0;
    }
  }
  if (carry) {
    digits.unshift(1);
  }
  return digits;
};
