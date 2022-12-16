/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let answer = 0;
  const map = {};
  for (let num of nums) {
    answer += (map[num - k] || 0) + (map[num + k] || 0);
    map[num] = (map[num] || 0) + 1;
  }
  return answer;
};
