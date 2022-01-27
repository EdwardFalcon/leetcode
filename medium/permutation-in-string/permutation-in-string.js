/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const count = new Array(26).fill(0);

  for (i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s2.length; i++) {
    count[s2.charCodeAt(i) - 97]--;
    if (i >= s1.length - 1) {
      count[s2.charCodeAt(i - s1.length) - 97]++;
      let j;
      for (j = 0; j < 26; j++) {
        if (count[j] !== 0) {
          break;
        }
      }
      if (j === 26) {
        return true;
      }
    }
  }
  return false;
};
