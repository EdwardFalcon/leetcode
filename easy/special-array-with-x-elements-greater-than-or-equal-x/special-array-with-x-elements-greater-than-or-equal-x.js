/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => b - a);
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid < nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left < nums.length && left === nums[left] ? -1 : left;
};
