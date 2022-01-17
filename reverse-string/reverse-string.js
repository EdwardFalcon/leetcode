/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let startPointer = 0;
  let endPointer = s.length - 1;
  while (startPointer < endPointer) {
    const tempChar = s[startPointer];
    s[startPointer] = s[endPointer];
    s[endPointer] = tempChar;
    startPointer++;
    endPointer--;
  }
};
