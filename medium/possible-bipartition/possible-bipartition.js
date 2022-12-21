/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const graph = {};
  for (let [a, b] of dislikes) {
    if (!graph[a]) {
      graph[a] = [];
    }
    if (!graph[b]) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  const mark = Array(n + 1).fill(-1);
  for (let i = 1; i <= n; i++) {
    if (mark[i] === -1 && !bfs(i, graph, mark)) {
      return false;
    }
  }
  return true;
};

const bfs = (start, graph, mark) => {
  const queue = [start];
  mark[queue] = 0;
  while (queue.length) {
    const node = queue.shift();
    if (!graph[node]) {
      continue;
    }
    for (let next of graph[node]) {
      if (mark[next] === mark[node]) {
        return false;
      }
      if (mark[next] === -1) {
        mark[next] = 1 - mark[node];
        queue.push(next);
      }
    }
  }
  return true;
};
