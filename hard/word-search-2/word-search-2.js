/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const root = {};
  const answer = [];
  for (const word of words) {
    let node = root;
    word.split('').forEach((val) => {
      if (!node[val]) {
        node[val] = {};
      }
      node = node[val];
    });
    node.word = word;
  }

  var backtracking = function (row, col, node) {
    if (node.word) {
      answer.push(node.word);
      node.word = null;
    }

    const temp = board[row][col];
    board[row][col] = '';
    for (const [dx, dy] of dirs) {
      let newRow = row + dx;
      let newCol = col + dy;
      if (
        newRow >= 0 &&
        newRow < board.length &&
        newCol >= 0 &&
        newCol < board[0].length
      ) {
        const char = board[newRow][newCol];
        if (node[char]) {
          backtracking(newRow, newCol, node[char]);
        }
      }
    }
    board[row][col] = temp;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let char = board[row][col];
      if (root[char]) {
        backtracking(row, col, root[char]);
      }
    }
  }

  return answer;
};
