/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (A.length < 3) {
    return false;
  }
  let hi = A[0];
  let hiIndex = 0;
  let increasing = true;
  for (let i = 1; i < A.length; i++) {
    if (increasing) {
      if (A[i] > hi) {
        hi = A[i];
        hiIndex = i;
      } else if (A[i] < hi) {
        increasing = false;
      } else {
        return false;
      }
    } else {
      if (A[i] >= A[i - 1]) {
        return false;
      }
    }
  }
  if (hiIndex === 0 || hiIndex === A.length - 1) {
    return false;
  }
  return true;
};
