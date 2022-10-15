/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  const sorted1 = s1.split('').sort().join('');
  const sorted2 = s2.split('').sort().join('');
  if (sorted1 !== sorted2) {
    return false;
  }
  let swap = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      swap++;
      if (swap > 2) {
        return false;
      }
    }
  }
  return true;
};
