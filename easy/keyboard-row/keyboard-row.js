/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const rows = [
    new Set('qwertyuiop'),
    new Set('asdfghjkl'),
    new Set('zxcvbnm'),
  ];
  const answer = [];
  for (let word of words) {
    const wordRows = new Set();
    for (let char of word) {
      char = char.toLowerCase();
      rows.forEach((row, i) => {
        if (row.has(char)) {
          wordRows.add(i);
        }
      });
    }
    if (wordRows.size === 1) {
      answer.push(word);
    }
  }
  return answer;
};
