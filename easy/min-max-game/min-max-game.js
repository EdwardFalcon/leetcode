/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  let length = nums.length;
  while (length > 1) {
    length /= 2;
    for (let i = 0; i < length; i++) {
      nums[i] =
        i % 2 === 0
          ? Math.min(nums[2 * i], nums[2 * i + 1])
          : Math.max(nums[2 * i], nums[2 * i + 1]);
    }
  }
  return nums[0];
};
