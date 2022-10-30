/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function (n, target) {
  let add = 0;
  let pos = 1;
  while (digitSum(n + add) > target) {
    pos *= 10;
    add = pos - (n % pos);
  }
  return add;
};

var digitSum = function (n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};
