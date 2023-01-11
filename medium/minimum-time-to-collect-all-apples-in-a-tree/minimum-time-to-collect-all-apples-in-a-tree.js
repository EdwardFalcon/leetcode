/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const list = Array(n)
    .fill()
    .map(() => []);
  edges.forEach(([v1, v2]) => {
    list[v1].push(v2);
    list[v2].push(v1);
  });
  return dfs(-1, 0, list, hasApple);
};

const dfs = (prev, curr, list, hasApple) => {
  let result = 0;
  for (let v of list[curr]) {
    if (v !== prev) {
      let temp = dfs(curr, v, list, hasApple);
      if (temp > 0 || hasApple[v]) {
        result += temp + 2;
      }
    }
  }
  return result;
};
