/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const count = Array(10).fill(0);
  for (let n of num) {
    count[n]++;
  }
  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) !== count[i]) {
      return false;
    }
  }
  return true;
};
