/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let result = 0;
  let end = -1;
  let minPos = -1;
  let maxPos = -1;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] >= minK && nums[i] <= maxK) {
      if (nums[i] == minK) {
        minPos = i;
      }
      if (nums[i] == maxK) {
        maxPos = i;
      }
      if (Math.min(minPos, maxPos) >= end) {
        result += Math.min(minPos, maxPos) - end;
      }
    } else {
      end = i;
    }
  }
  return result;
};
