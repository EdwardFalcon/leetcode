/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const freq = {};
  for (let num of nums) {
    if (!freq[num]) {
      freq[num] = 0;
    }
    freq[num]++;
  }
  const pairs = Object.entries(freq);
  pairs.sort((a, b) => (a[1] == b[1] ? b[0] - a[0] : a[1] - b[1]));
  const result = [];
  for (let [value, count] of pairs) {
    for (let i = 0; i < count; i++) {
      result.push(value);
    }
  }
  return result;
};
