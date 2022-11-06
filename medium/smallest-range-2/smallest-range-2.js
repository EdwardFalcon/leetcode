/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (nums, k) {
  if (nums.length === 1) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let answer = nums[nums.length - 1] - nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    const max = Math.max(nums[i] + k, nums[nums.length - 1] - k);
    const min = Math.min(nums[0] + k, nums[i + 1] - k);
    answer = Math.min(answer, max - min);
  }
  return answer;
};
