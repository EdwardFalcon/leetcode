/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let result = [];
  for (let digit of digits) {
    result = multipleArrays(result, map[digit]);
  }
  return result;
};

var multipleArrays = function (arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  const result = [];
  arr1.forEach((first) => {
    arr2.forEach((second) => {
      result.push(first + second);
    });
  });
  return result;
};
