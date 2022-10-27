/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let maxSum = -Infinity;
  let minSum = Infinity;
  let totalSum = 0;
  let currentSum1 = 0;
  let currentSum2 = 0;
  for (let num of nums) {
    totalSum += num;
    currentSum1 += num;
    maxSum = Math.max(currentSum1, maxSum);
    if (currentSum1 < 0) {
      currentSum1 = 0;
    }
    currentSum2 += num;
    minSum = Math.min(currentSum2, minSum);
    if (currentSum2 > 0) {
      currentSum2 = 0;
    }
  }
  if (maxSum < 0) {
    return maxSum;
  }
  console.log(maxSum, minSum, totalSum);
  return Math.max(maxSum, totalSum - minSum);
};
