/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  var counts = {};
  let largestCount = 0;
  let start = 0;
  let maxLength = 0;
  for (let end = 0; end < s.length; end++) {
    const c = s[end];
    counts[c] = (counts[c] || 0) + 1;
    largestCount = Math.max(largestCount, counts[c]);
    if (end - start + 1 - largestCount > k) {
      counts[s[start]] -= 1;
      start += 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};
