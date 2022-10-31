/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  if (source === target) {
    return 0;
  }
  const graph = [];
  for (let i = 0; i < routes.length; i++) {
    routes[i].sort((a, b) => a - b);
    graph.push([]);
  }
  const visited = new Set();
  const targets = new Set();
  const queue = [];

  for (let i = 0; i < routes.length; i++) {
    for (let j = i + 1; j < routes.length; j++) {
      if (intersect(routes[i], routes[j])) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].includes(source)) {
      visited.add(i);
      queue.push([i, 0]);
    }
    if (routes[i].includes(target)) {
      targets.add(i);
    }
  }

  while (queue.length) {
    const [node, depth] = queue.shift();
    if (targets.has(node)) {
      return depth + 1;
    }
    for (let next of graph[node]) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, depth + 1]);
      }
    }
  }

  return -1;
};

var intersect = function (a, b) {
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      return true;
    }
    if (a[i] < b[j]) {
      i++;
    } else {
      j++;
    }
  }
  return false;
};
