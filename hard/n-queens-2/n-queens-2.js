/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const board = Array(n)
    .fill()
    .map(() => Array(n).fill('.'));
  const result = [];
  dfs(board, 0, result);
  return result.length;
};
var check = function (board, row, col) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === 'Q') {
      return false;
    }
    if (row - i >= 0 && col - i >= 0 && board[row - i][col - i] == 'Q') {
      return false;
    }
    if (
      row - i >= 0 &&
      col + i < board.length &&
      board[row - i][col + i] == 'Q'
    ) {
      return false;
    }
  }
  return true;
};

var dfs = function (board, row, result) {
  if (row === board.length) {
    result.push([...board].map((row) => row.join('')));
    return;
  }
  for (let col = 0; col < board.length; col++) {
    if (check(board, row, col)) {
      board[row][col] = 'Q';
      dfs(board, row + 1, result);
      board[row][col] = '.';
    }
  }
};
