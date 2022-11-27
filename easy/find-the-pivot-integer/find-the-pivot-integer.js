/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let left = 0;
  let right = (n * (n + 1)) / 2;
  for (let i = 1; i <= n; i++) {
    left += i;
    if (left === right) {
      return i;
    }
    right -= i;
  }
  return -1;
};
