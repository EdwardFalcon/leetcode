/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  return dfs(arr, 0, '');
};

var isUnique = function (str) {
  const set = new Set();
  for (let char of str) {
    if (set.has(char)) {
      return false;
    }
    set.add(char);
  }
  return true;
};

var dfs = function (arr, start, str) {
  if (!isUnique(str)) {
    return 0;
  }
  let max = str.length;
  for (let i = start; i < arr.length; i++) {
    max = Math.max(max, dfs(arr, i + 1, str + arr[i]));
  }
  return max;
};
