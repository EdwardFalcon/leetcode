/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return accounts
    .map((account) => account.reduce((p, c) => c + p, 0))
    .reduce((p, c) => Math.max(p, c), 0);
};
