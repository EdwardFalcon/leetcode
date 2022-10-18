/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] - mid - k >= 1) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left + k;
};
