/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let left = 0;
  let right = n;
  let k = 0;
  let curr = 0;
  while (left <= right) {
    k = left + Math.floor((right - left) / 2);
    curr = (k * (k + 1)) / 2;
    if (curr === n) {
      return k;
    }
    if (n < curr) {
      right = k - 1;
    } else {
      left = k + 1;
    }
  }
  return right;
};
