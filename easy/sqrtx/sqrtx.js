/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 1;
  let end = x;
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2) + 1;
    if (mid > x / mid) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }
  return end;
};
