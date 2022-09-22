/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let pos = 0;
  while (pos < s.length) {
    const sign = map[s[pos + 1]] > map[s[pos]] ? -1 : 1;
    result += map[s[pos]] * sign;
    pos++;
  }
  return result;
};
