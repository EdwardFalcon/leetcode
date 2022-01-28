/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    const startCharCode = s.charCodeAt(start);
    if (isNotAlphaNumeric(startCharCode)) {
      start++;
      continue;
    }
    const endCharCode = s.charCodeAt(end);
    if (isNotAlphaNumeric(endCharCode)) {
      end--;
      continue;
    }
    if (
      (startCharCode <= 57 && endCharCode > 57) ||
      (endCharCode <= 57 && startCharCode > 57)
    ) {
      return false;
    }
    const diff = Math.abs(startCharCode - endCharCode);
    if (diff !== 0 && diff !== 32) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

var isNotAlphaNumeric = function (charCode) {
  return (
    charCode < 48 ||
    charCode > 122 ||
    (charCode > 57 && charCode < 65) ||
    (charCode > 90 && charCode < 97)
  );
};
