/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let pos = 0;
  let neg = 0;
  let max = 0;
  for (let num of nums) {
    if (num === 0) {
      pos = 0;
      neg = 0;
    } else if (num > 0) {
      pos++;
      neg = neg === 0 ? 0 : neg + 1;
    } else {
      const tmp = pos;
      pos = neg === 0 ? 0 : neg + 1;
      neg = tmp + 1;
    }
    max = Math.max(max, pos);
  }
  return max;
};
