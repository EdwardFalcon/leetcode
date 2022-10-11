/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let result = 0;
  let dp = Array(nums.length).fill(0);
  for (let i = 2; i <= nums.length - 1; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp[i] = 1 + dp[i - 1];
      result += dp[i];
    }
  }

  return result;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
