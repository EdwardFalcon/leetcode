/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jewels = J.split('');
  const stones = S.split('');
  return stones.filter(s => jewels.includes(s)).length;
};