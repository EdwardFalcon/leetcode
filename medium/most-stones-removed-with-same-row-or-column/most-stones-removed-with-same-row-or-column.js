/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const visited = new Set();
  let paths = 0;
  for (let i = 0; i < stones.length; i++) {
    if (visited.has(i)) {
      continue;
    }
    paths++;
    dfs(i, stones, visited);
  }
  return stones.length - paths;
};

var dfs = function (index, stones, visited) {
  visited.add(index);
  for (let i = 0; i < stones.length; i++) {
    if (visited.has(i)) {
      continue;
    }
    const [r1, c1] = stones[i];
    const [r2, c2] = stones[index];
    if (r1 === r2 || c1 === c2) {
      dfs(i, stones, visited);
    }
  }
};
