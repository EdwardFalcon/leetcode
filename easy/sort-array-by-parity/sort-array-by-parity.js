/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let offset = 0;
  for (let i = 0; i < A.length; ++i) {
    if (A[i] % 2 !== 0) {
      offset++;
    } else {
      const temp = A[i - offset];
      A[i - offset] = A[i];
      if (offset > 0) {
        A[i] = temp;
      }
    }
  }
  return A;
};
