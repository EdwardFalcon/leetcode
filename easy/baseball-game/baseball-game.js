/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const scores = [];
  operations.forEach((op) => {
    if (!isNaN(op)) {
      scores.push(Number(op));
    } else if (op === 'D') {
      scores.push(scores[scores.length - 1] * 2);
    } else if (op === 'C') {
      scores.pop();
    } else if (op === '+') {
      scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
    }
  });
  return scores.reduce((p, c) => p + c, 0);
};
