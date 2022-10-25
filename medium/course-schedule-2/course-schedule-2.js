/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = Array(numCourses)
    .fill()
    .map(() => []);
  const visited = Array(numCourses).fill(0);
  const path = [];
  for (let [a, b] of prerequisites) {
    graph[a].push(b);
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(graph, visited, path, i)) {
      return [];
    }
  }
  return path;
};

var dfs = function (graph, visited, path, n) {
  if (visited[n] === -1) {
    return false;
  }
  if (visited[n] === 1) {
    return true;
  }
  visited[n] = -1;
  for (let i of graph[n]) {
    if (!dfs(graph, visited, path, i)) {
      return false;
    }
  }
  path.push(n);
  visited[n] = 1;
  return true;
};
