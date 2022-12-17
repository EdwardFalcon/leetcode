/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return '';
};

const isPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};
