/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex <= end) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    if (nums[midIndex] === target) {
      return mid;
    }
    if (nums[midIndex] > target) {
      endIndex = midIndex - 1;
    } else {
      startIndex = midIndex + 1;
    }
  }
  return -1;
};
