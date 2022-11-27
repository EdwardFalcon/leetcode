/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let answer = 0;
  let dp = Array(nums.length)
    .fill()
    .map(() => ({}));
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const count = dp[j][diff] || 0;
      answer += count;
      dp[i][diff] = (dp[i][diff] || 0) + count + 1;
    }
  }
  return answer;
};
