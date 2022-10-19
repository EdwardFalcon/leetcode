/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let minDiff = arr[1] - arr[0];
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const currDiff = arr[i + 1] - arr[i];
    if (currDiff < minDiff) {
      minDiff = currDiff;
      result = [];
    }
    if (currDiff === minDiff) {
      result.push([arr[i], arr[i + 1]]);
    }
  }
  return result;
};
