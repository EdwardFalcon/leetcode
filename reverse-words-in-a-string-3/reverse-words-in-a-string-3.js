/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const charArray = s.split('');
  let startPointer = 0;
  while (startPointer < charArray.length) {
    const separatorIndex = getSeparatorIndex(charArray, startPointer);
    reverseSubArray(charArray, startPointer, separatorIndex - 1);
    startPointer = separatorIndex + 1;
  }
  return charArray.join('');
};

var reverseSubArray = function (arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

var getSeparatorIndex = function (arr, start) {
  while (arr[start] !== ' ' && start < arr.length) {
    start++;
  }
  return start;
};
