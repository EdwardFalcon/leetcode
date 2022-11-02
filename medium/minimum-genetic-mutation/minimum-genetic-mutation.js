/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  const visited = new Set();
  visited.add(start);
  const queue = [start];
  let answer = 0;
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (node === end) {
        return answer;
      }
      for (let char of ['A', 'C', 'G', 'T']) {
        for (let j = 0; j < node.length; j++) {
          const next = node.substring(0, j) + char + node.substring(j + 1);
          if (!visited.has(next) && bank.includes(next)) {
            queue.push(next);
            visited.add(next);
          }
        }
      }
    }
    answer++;
  }
  return -1;
};
