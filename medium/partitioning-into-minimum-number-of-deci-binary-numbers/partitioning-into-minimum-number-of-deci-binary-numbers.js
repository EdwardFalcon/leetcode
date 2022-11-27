/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return n.split('').reduce((p, c) => Math.max(p, c), 0);
};
