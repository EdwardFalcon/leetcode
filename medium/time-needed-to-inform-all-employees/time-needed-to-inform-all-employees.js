/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  const graph = {};
  for (let i = 0; i < manager.length; i++) {
    const managerId = manager[i];
    if (managerId === -1) {
      continue;
    }
    if (graph[managerId] === undefined) {
      graph[managerId] = [];
    }
    graph[managerId].push(i);
  }
  let answer = 0;
  const stack = [[headID, 0]];
  while (stack.length) {
    const [node, time] = stack.pop();
    answer = Math.max(answer, time);
    if (informTime[node] !== 0) {
      const children = graph[node];
      for (let i = 0; i < children.length; i++) {
        stack.push([children[i], time + informTime[node]]);
      }
    }
  }
  return answer;
};
