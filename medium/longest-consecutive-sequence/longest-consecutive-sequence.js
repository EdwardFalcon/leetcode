/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let maxLength = 0;
  for (let num of set.keys()) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;
      while (set.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
};
