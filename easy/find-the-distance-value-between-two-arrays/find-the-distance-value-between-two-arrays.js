/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  arr2.sort((a, b) => a - b);
  let distance = 0;
  for (let num of arr1) {
    if (isNotLess(arr2, num, d)) {
      distance++;
    }
  }
  return distance;
};

var isNotLess = function (arr, num, d) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (Math.abs(num - arr[mid]) <= d) {
      return false;
    } else if (arr[mid] > num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return true;
};
