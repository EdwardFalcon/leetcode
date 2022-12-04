/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
  const len = nums.length;
  if (len === 1) {
    return 0;
  }
  const prefixSumLeft = [];
  const prefixSumRight = [];
  prefixSumLeft[0] = nums[0];
  prefixSumRight[len - 1] = 0;
  for (let i = 1; i < len; i++) {
    prefixSumLeft[i] = prefixSumLeft[i - 1] + nums[i];
    prefixSumRight[len - i - 1] = prefixSumRight[len - i] + nums[len - i];
  }
  let min = Infinity;
  let index;
  for (let i = 0; i < len; i++) {
    const avg = Math.abs(
      Math.floor(prefixSumLeft[i] / (i + 1)) -
        Math.floor(prefixSumRight[i] / (len - i - 1) || 0)
    );
    if (avg < min) {
      min = avg;
      index = i;
    }
  }
  return index;
};
