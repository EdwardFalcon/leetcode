/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let pointer0 = 0;
  let pointer2 = nums.length - 1;
  let pointer = 0;
  while (pointer <= pointer2) {
    if (nums[pointer] === 2) {
      nums[pointer] = nums[pointer2];
      nums[pointer2--] = 2;
    } else if (nums[pointer] === 0) {
      nums[pointer++] = nums[pointer0];
      nums[pointer0++] = 0;
    } else {
      pointer++;
    }
  }
};
