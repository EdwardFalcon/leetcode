/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array(numCourses)
    .fill()
    .map(() => []);
  const visited = Array(numCourses).fill(0);
  for (let [a, b] of prerequisites) {
    graph[a].push(b);
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(graph, visited, i)) {
      return false;
    }
  }
  return true;
};

var dfs = function (graph, visited, n) {
  if (visited[n] === -1) {
    return false;
  }
  if (visited[n] === 1) {
    return true;
  }
  visited[n] = -1;
  for (let i of graph[n]) {
    if (!dfs(graph, visited, i)) {
      return false;
    }
  }
  visited[n] = 1;
  return true;
};
