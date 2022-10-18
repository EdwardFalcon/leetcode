/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;
  while (left < right) {
    const mid = (right + left) / 2;
    const product = mid * mid;
    if (Math.ceil(mid) * Math.ceil(mid) === num) {
      return true;
    }
    if (product > num) {
      right = Math.floor(mid);
    } else {
      left = Math.ceil(mid);
    }
  }
  return false;
};
