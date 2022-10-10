/**
 * @param {string} s
 * @return {string}
 */

const vowels = 'aeiou';

var reverseVowels = function (s) {
  const result = s.split('');
  let left = 0;
  let right = result.length - 1;
  while (left < right) {
    if (!isVowel(result[left])) {
      left++;
    } else if (!isVowel(result[right])) {
      right--;
    } else {
      const temp = result[left];
      result[left] = result[right];
      result[right] = temp;
      left++;
      right--;
    }
  }
  return result.join('');
};

var isVowel = function (char) {
  return vowels.includes(char.toLowerCase());
};
