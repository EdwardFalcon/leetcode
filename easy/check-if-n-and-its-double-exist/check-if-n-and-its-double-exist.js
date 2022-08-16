/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i] * 2] || hash[arr[i] / 2]) {
      return true;
    }
    hash[arr[i]] = true;
  }
  return false;
};
