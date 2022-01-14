/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = [];
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const endSquare = nums[end] ** 2;
    const startSquare = nums[start] ** 2;
    if (endSquare > startSquare) {
      result.unshift(endSquare);
      end--;
    } else {
      result.unshift(startSquare);
      start++;
    }
  }
  console.log(result);
  return result;
};
