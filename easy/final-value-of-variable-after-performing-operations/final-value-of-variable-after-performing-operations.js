/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  return operations
    .map((op) => (op.includes('+') ? 1 : -1))
    .reduce((p, c) => p + c);
};
