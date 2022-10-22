/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let minLeft = -1;
  let minRight = 0;
  let left = 0;
  let right = 0;
  const currentDict = {};
  const dictT = {};
  for (char of t) {
    if (!dictT[char]) {
      dictT[char] = 0;
    }
    dictT[char]++;
  }
  while (right < s.length) {
    const char = s[right];
    if (!currentDict[char]) {
      currentDict[char] = 0;
    }
    currentDict[char]++;
    while (check(currentDict, dictT)) {
      if (minLeft === -1) {
        minLeft = left;
        minRight = right;
      } else if (right - left <= minRight - minLeft) {
        minRight = right;
        minLeft = left;
      }
      currentDict[s[left]]--;
      left++;
    }
    right++;
  }
  return minLeft === -1 ? '' : s.substring(minLeft, minRight + 1);
};

var check = function (map1, map2) {
  for (let key in map2) {
    if (!map1[key] || map1[key] < map2[key]) {
      return false;
    }
  }
  return true;
};
