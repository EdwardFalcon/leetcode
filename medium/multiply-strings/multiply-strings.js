/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num2 === '0' || num1 === '0') {
    return '0';
  }
  let result = '0';
  let p = num2.length - 1;
  while (p >= 0) {
    let temp = multiplyOneDigit(num1, num2[p]);
    for (let i = 0; i < num2.length - p - 1; i++) {
      temp += '0';
    }
    result = sum(result, temp);
    p--;
  }
  return result;
};

var sum = function (num1, num2) {
  let result = '';
  let carry = 0;
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    const sum = Number(num1[p1] || 0) + Number(num2[p2] || 0) + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    p1--;
    p2--;
  }
  if (carry) {
    result = carry + result;
  }
  return result;
};

var multiplyOneDigit = function (num, digit) {
  let result = '';
  let carry = 0;
  let p = num.length - 1;
  while (p >= 0) {
    const sum = Number(num[p]) * Number(digit) + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    p--;
  }
  if (carry) {
    result = carry + result;
  }
  return result;
};
