/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const result = [];
  const permutation = (str, index, res) => {
    if (index > str.length - 1) {
      result.push(res);
      return;
    }
    if (str.charCodeAt(index) - 97 >= 0) {
      permutation(str, index + 1, res + str[index]);
      permutation(str, index + 1, res + str[index].toUpperCase());
    } else {
      permutation(str, index + 1, res + str[index]);
    }
  };
  permutation(s.toLowerCase(), 0, '');
  return result;
};
