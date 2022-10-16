/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
  for (let i = 0; i <= num; i++) {
    if (i + getReverse(i) === num) {
      return true;
    }
  }
  return false;
};

var getReverse = function (num) {
  let result = 0;
  while (num > 0) {
    result *= 10;
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result;
};
