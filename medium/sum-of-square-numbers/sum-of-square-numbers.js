/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {
    const b = c - Math.floor(a * a);
    if (search(0, b, b)) {
      return true;
    }
  }
  return false;
};

var search = function (left, right, target) {
  if (left > right) {
    return false;
  }
  const mid = Math.floor((left + right) / 2);
  if (mid * mid === target) {
    return true;
  }
  if (mid * mid > target) {
    return search(left, mid - 1, target);
  }
  return search(mid + 1, right, target);
};
