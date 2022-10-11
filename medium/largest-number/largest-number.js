/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  return nums
    .sort((a, b) => `${b}${a}` - `${a}${b}`)
    .reduce((p, c) => (p === `0` ? '0' : `${p}${c}`), '');
};
