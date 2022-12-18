/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    x += move === 'L' ? -1 : move === 'R' ? 1 : 0;
    y += move === 'D' ? -1 : move === 'U' ? 1 : 0;
  }

  return x === 0 && y === 0;
};
