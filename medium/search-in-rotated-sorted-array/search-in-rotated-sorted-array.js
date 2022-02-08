/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const pivot = findPivot(nums, 0, nums.length - 1);
  if (pivot < 0) {
    return binarySearch(nums, target, 0, nums.length - 1);
  }
  const left = binarySearch(nums, target, 0, pivot - 1);
  const right = binarySearch(nums, target, pivot, nums.length - 1);
  return Math.max(left, right);
};
var findPivot = function (nums, start, end) {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (nums[mid] > nums[mid + 1]) {
    return mid + 1;
  }
  return Math.max(
    findPivot(nums, start, mid - 1),
    findPivot(nums, mid + 1, end)
  );
};
var binarySearch = function (nums, target, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};
