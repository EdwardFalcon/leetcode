/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let result = '';
  let carry = false;
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    const sum =
      Number(num1[p1--] || 0) + Number(num2[p2--] || 0) + Number(carry);
    result = (sum % 10) + result;
    carry = sum > 9;
  }
  if (carry) {
    result = '1' + result;
  }
  return result;
};
