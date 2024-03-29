/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum > 0) {
        end--;
      } else if (sum < 0) {
        start++;
      } else {
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        while (nums[start] === nums[start - 1] && start < end) {
          start++;
        }
      }
    }
  }
  return result;
};
