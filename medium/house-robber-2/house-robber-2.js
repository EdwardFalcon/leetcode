/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length;
  if (length === 1) {
    return nums[0];
  }
  return Math.max(subRob(0, length - 2, nums), subRob(1, length - 1, nums));
};

var subRob = function (start, end, nums) {
  let first = nums[start];
  let second = nums[start] < nums[start + 1] ? nums[start + 1] : nums[start];

  for (let i = start + 2; i < end + 1; i++) {
    let third = Math.max(second, nums[i] + first);
    first = second;
    second = third;
  }

  return second;
};
