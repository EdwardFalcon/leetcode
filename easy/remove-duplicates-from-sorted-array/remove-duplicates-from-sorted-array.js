/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pointer = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[pointer]) {
      nums[++pointer] = nums[i];
    }
  }
  return ++pointer;
};
