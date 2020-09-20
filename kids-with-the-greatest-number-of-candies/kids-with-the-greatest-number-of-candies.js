/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const maxCandies = candies.reduce((p, c) => c > p ? c : p, 0);
  return candies.map(c => c + extraCandies >= maxCandies);
};