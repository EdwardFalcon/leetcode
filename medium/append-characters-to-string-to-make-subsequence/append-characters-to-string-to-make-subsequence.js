/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let curr = 0;
  for (let char of s) {
    if (char === t[curr]) {
      curr++;
    }
    if (t.length === curr) {
      return 0;
    }
  }
  return t.length - curr;
};
