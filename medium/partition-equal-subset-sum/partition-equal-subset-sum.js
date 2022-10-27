/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (nums.length < 2) {
    return false;
  }
  let sum = nums.reduce((p, c) => p + c, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  sum /= 2;
  const dp = [true];
  for (let i = 1; i <= nums.length; i++) {
    for (let j = sum; j >= nums[i - 1]; j--) {
      dp[j] = dp[j] || dp[j - nums[i - 1]];
    }
  }
  return dp[sum] || false;
};
