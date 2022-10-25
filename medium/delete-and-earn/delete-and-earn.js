/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const dp = Array(10 ** 4 + 1).fill(0);
  for (let num of nums) {
    dp[num] += num;
  }
  let take = 0;
  let skip = 0;
  for (let i = 0; i < dp.length; i++) {
    const takeI = skip + dp[i];
    const skipI = Math.max(take, skip);
    take = takeI;
    skip = skipI;
  }

  return Math.max(take, skip);
};
