/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let answer = nums[n - 1] * nums[n - 2] * nums[n - 3];
  if (nums[0] < 0 && nums[1] < 0) {
    answer = Math.max(answer, nums[0] * nums[1] * nums[n - 1]);
  }
  return answer;
};
