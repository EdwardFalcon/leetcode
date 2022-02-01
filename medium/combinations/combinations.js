/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const helper = (start, arr) => {
    if (arr.length === k) {
      result.push(arr);
      return;
    }
    for (let i = start; i <= n; i++) {
      helper(i + 1, [...arr, i]);
    }
  };
  helper(1, []);
  return result;
};
