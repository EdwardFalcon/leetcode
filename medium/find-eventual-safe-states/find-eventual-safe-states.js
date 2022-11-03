/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const colors = Array(graph.length).fill(0);
  const result = [];
  for (let i = 0; i < graph.length; i++) {
    if (dfs(i, graph, colors)) {
      result.push(i);
    }
  }
  return result;
};

var dfs = function (node, graph, colors) {
  if (colors[node] > 0) {
    return colors[node] == 2;
  }
  colors[node] = 1;
  for (let neighbor of graph[node]) {
    if (colors[node] === 2) {
      continue;
    }
    if (colors[neighbor] === 1 || !dfs(neighbor, graph, colors)) {
      return false;
    }
  }
  colors[node] = 2;
  return true;
};
