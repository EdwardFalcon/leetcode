/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    if (nums[midIndex] === target) {
      return midIndex;
    }
    if (nums[midIndex] > target) {
      endIndex = midIndex - 1;
    } else {
      startIndex = midIndex + 1;
    }
  }
  return startIndex;
};
