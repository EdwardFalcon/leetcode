/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const len = nums.length;
  let count = new Array(len).fill(1);
  let freq = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (count[i] < count[j] + 1) {
          count[i] = count[j] + 1;
          freq[i] = freq[j];
        } else if (count[i] === count[j] + 1) {
          freq[i] += freq[j];
        }
      }
    }
  }
  const max = Math.max(...count);
  let result = 0;
  for (let k = 0; k < len; k++) {
    if (count[k] === max) {
      result += freq[k];
    }
  }
  return result;
};
