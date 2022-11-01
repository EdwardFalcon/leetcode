/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let max = 0;
  let curr = 0;
  for (let num of values) {
    max = Math.max(max, curr + num);
    curr = Math.max(curr, num) - 1;
    console.log(num, max, curr);
  }
  return max;
};
