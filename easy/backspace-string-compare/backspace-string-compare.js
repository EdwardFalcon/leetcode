/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let pointerS = s.length - 1;
  let deleteS = 0;
  let pointerT = t.length - 1;
  let deleteT = 0;
  while (pointerS >= 0 || pointerT >= 0) {
    while (pointerS >= 0) {
      if (s[pointerS] === '#') {
        deleteS++;
        pointerS--;
      } else if (deleteS > 0) {
        deleteS--;
        pointerS--;
      } else {
        break;
      }
    }
    while (pointerT >= 0) {
      if (t[pointerT] === '#') {
        deleteT++;
        pointerT--;
      } else if (deleteT > 0) {
        deleteT--;
        pointerT--;
      } else {
        break;
      }
    }
    if (pointerS >= 0 && pointerT >= 0 && s[pointerS] !== t[pointerT]) {
      return false;
    }
    if (pointerS >= 0 !== pointerT >= 0) {
      return false;
    }
    pointerS--;
    pointerT--;
  }
  return true;
};
