/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let answer = 0;
  for (let i = 0; i < strs[0].length; i++) {
    const column = [];
    for (let j = 0; j < strs.length; j++) {
      column.push(strs[j][i]);
    }
    if (column.join() != column.sort().join()) {
      answer++;
    }
  }
  return answer;
};
