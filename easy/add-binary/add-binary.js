/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  num1 = a.split('').reverse();
  num2 = b.split('').reverse();
  result = '';
  maxLength = Math.max(num1.length, num2.length);
  let carry = 0;
  for (let i = 0; i < maxLength; i++) {
    let temp = (Number(num1[i]) || 0) + (Number(num2[i]) || 0) + carry;
    if (temp === 3) {
      result = 1 + result;
      carry = 1;
    } else if (temp === 2) {
      result = 0 + result;
      carry = 1;
    } else {
      result = temp + result;
      carry = 0;
    }
  }
  if (carry === 1) {
    result = 1 + result;
  }
  return result;
};
