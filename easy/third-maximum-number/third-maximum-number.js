/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const max = new Set();
  for (let i = 0; i < nums.length; i++) {
    max.add(nums[i]);
    if (max.size > 3) {
      max.delete(Math.min(...max));
    }
  }
  if (max.size === 3) {
    return Math.min(...max);
  }
  return Math.max(...max);
};
