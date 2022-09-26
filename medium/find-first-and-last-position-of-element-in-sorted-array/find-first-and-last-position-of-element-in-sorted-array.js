/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const result = [-1, -1];
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      result[0] = mid;
      end = mid - 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  start = 0;
  end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      result[1] = mid;
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
};
