/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s === goal) {
      return true;
    }
    s = s[s.length - 1] + s.substr(0, s.length - 1);
  }
  return false;
};
