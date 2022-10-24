/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  let result = 0;
  let gPtr = 0;
  let sPtr = 0;
  while (gPtr < g.length && sPtr < s.length) {
    if (g[gPtr] <= s[sPtr]) {
      result++;
      sPtr++;
    }
    gPtr++;
  }
  return result;
};
