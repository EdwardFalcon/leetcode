/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let left = 0;
  let right = 0;
  const set = new Set();
  while (left < s.length && right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right++]);
      max = Math.max(max, right - left);
    } else {
      set.delete(s[left++]);
    }
  }
  return max;
};
