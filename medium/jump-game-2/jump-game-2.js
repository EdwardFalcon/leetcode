/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const count = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      if (count[i + j] === 0) {
        count[i + j] = count[i] + 1;
        if (i + j === nums.length - 1) {
          return count[i + j];
        }
      }
    }
  }
  return count[count.length - 1];
};
