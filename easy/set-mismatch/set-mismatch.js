/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let less = 0;
  let double = 0;
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      double = nums[i];
    }
    set.add(nums[i]);
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      less = i;
      break;
    }
  }
  return [double, less];
};
