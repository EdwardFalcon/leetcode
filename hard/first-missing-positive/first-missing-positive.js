/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) nums[i] = Infinity;
  }
  for (let i = 0; i < n; i++) {
    let numAbs = Math.abs(nums[i]);
    if (numAbs <= n && nums[numAbs - 1] > 0) {
      nums[numAbs - 1] = -nums[numAbs - 1];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
};
