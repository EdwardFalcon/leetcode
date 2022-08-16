/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let temp,
    high = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    temp = arr[i];
    arr[i] = high;
    if (temp > high) {
      high = temp;
    }
  }
  return arr;
};
