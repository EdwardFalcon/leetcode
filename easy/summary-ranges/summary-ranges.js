/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const result = [];
  let left = 0;
  let right = 1;
  while (left < nums.length) {
    const prev = right - 1;
    if (nums[right] !== nums[prev] + 1) {
      result.push(`${nums[left]}` + (prev !== left ? `->${nums[prev]}` : ''));
      left = right;
    }
    right++;
  }
  return result;
};
