/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    console.log(left, right, mid);
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (arr[mid - 1] < arr[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return left;
};
