/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) {
    return tasks.length;
  }
  const taskFreqs = Array(26).fill(0);
  for (let task of tasks) {
    taskFreqs[task.charCodeAt(0) - 65]++;
  }
  taskFreqs.sort((a, b) => b - a);
  let maxIdles = taskFreqs[0] - 1;
  let idleCount = n * maxIdles;
  for (let i = 1; i < 26; i++) {
    idleCount -= Math.min(maxIdles, taskFreqs[i]);
  }
  return tasks.length + Math.max(0, idleCount);
};
