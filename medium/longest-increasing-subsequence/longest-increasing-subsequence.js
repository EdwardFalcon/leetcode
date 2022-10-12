/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let max = 0;
  const count = Array(nums.length).fill(0);
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        count[i] = Math.max(count[i], count[j] + 1);
      }
    }
    max = Math.max(max, count[i]);
  }
  return max + 1;
};
