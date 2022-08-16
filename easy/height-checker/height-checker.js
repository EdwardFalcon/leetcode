/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  return [...heights]
    .sort((v1, v2) => v1 - v2)
    .filter((v, i) => v != heights[i]).length;
};
