/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const unique = new Set(nums);
  if (unique.has(0)) {
    return unique.size - 1;
  }
  return unique.size;
};
