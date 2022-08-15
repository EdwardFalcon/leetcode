/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  // [1,0,2,3,0,4,5,0]
  //
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i + 1; j--) {
        arr[j] = arr[j - 1];
      }
      arr[i + 1] = 0;
      i++;
    }
  }
};
