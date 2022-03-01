/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  while (n !== 1) {
    n = getSumSquares(n);
    if (set.has(n)) {
      return false;
    }
    set.add(n);
  }
  return true;
};

var getSumSquares = function (n) {
  let result = 0;
  while (n > 0) {
    result += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return result;
};
