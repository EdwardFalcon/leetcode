/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let gamers = new Array(n).fill(1).map((v_, i) => i + 1);
  let loserIndex = 0;
  while (gamers.length > 1) {
    loserIndex = (loserIndex + k - 1) % gamers.length;
    gamers.splice(loserIndex, 1);
  }
  return gamers[0];
};
