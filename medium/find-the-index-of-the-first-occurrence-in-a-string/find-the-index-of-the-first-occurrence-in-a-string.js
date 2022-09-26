/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  const maxStart = haystack.length - needle.length;
  let startWord = 0;
  while (startWord <= maxStart) {
    let endWord = 0;
    while (
      endWord < needle.length &&
      haystack[startWord + endWord] === needle[endWord]
    ) {
      endWord++;
    }
    if (endWord === needle.length) {
      return startWord;
    }
    startWord++;
  }
  return -1;
};
