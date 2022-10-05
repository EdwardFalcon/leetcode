/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const directions = [
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, 0],
  [1, -1],
];

var gameOfLife = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const neighbors = countNeighbors(i, j, board);
      if (board[i][j] === 0) {
        board[i][j] = neighbors === 3 ? 'N' : 0;
      } else if (neighbors < 2 || neighbors > 3) {
        board[i][j] = 'D';
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'D') {
        board[i][j] = 0;
      } else if (board[i][j] === 'N') {
        board[i][j] = 1;
      }
    }
  }
};

var countNeighbors = function (x, y, board) {
  let amount = 0;
  for (const [dx, dy] of directions) {
    const newX = x + dx;
    const newY = y + dy;
    if (
      newX < 0 ||
      newY < 0 ||
      newX > board.length - 1 ||
      newY > board[0].length - 1
    ) {
      continue;
    }
    if (board[newX][newY] === 1 || board[newX][newY] === 'D') {
      amount++;
    }
  }
  return amount;
};
