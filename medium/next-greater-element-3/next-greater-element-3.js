/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const arr = String(n).split('');
  let pivot = arr.length - 2;
  while (pivot >= 0 && arr[pivot] >= arr[pivot + 1]) {
    pivot--;
  }
  if (pivot < 0) {
    return -1;
  }
  let i = arr.length - 1;
  while (arr[i] <= arr[pivot]) {
    i--;
  }
  [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
  const num = Number(
    [...arr.slice(0, pivot + 1), ...arr.slice(pivot + 1).reverse()].join('')
  );
  return num > 2 ** 31 - 1 ? -1 : num;
};
