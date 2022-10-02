/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rows = board.length;
  const cols = board[0].length;
  for (let i = 0; i < rows; i++) {
    if (board[i][0] === 'O') {
      mark(i, 0, board);
    }
    if (board[i][cols - 1] === 'O') {
      mark(i, cols - 1, board);
    }
  }
  for (let i = 0; i < cols; i++) {
    if (board[0][i] === 'O') {
      mark(0, i, board);
    }
    if (board[rows - 1][i] === 'O') {
      mark(rows - 1, i, board);
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'M') {
        board[i][j] = 'O';
      } else if (
        board[i][j] === 'O' &&
        i !== 0 &&
        j !== 0 &&
        i !== rows - 1 &&
        j !== cols - 1
      ) {
        board[i][j] = 'X';
      }
    }
  }
};

var mark = function (i, j, board) {
  if (
    i < 0 ||
    j < 0 ||
    i > board.length - 1 ||
    j > board[0].length - 1 ||
    board[i][j] !== 'O'
  ) {
    return;
  }
  board[i][j] = 'M';
  mark(i + 1, j, board);
  mark(i, j + 1, board);
  mark(i - 1, j, board);
  mark(i, j - 1, board);
};
