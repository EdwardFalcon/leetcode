/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const dead = new Set(deadends);
  const visited = new Set(['0000']);
  const queue = [['0000', 0]];
  for (let [node, steps] of queue) {
    if (node === target) {
      return steps;
    }
    if (dead.has(node)) {
      continue;
    }
    const children = [];
    for (let i = 0; i < node.length; i++) {
      children.push(
        node.slice(0, i) + ((+node[i] + 1) % 10).toString() + node.slice(i + 1)
      );
      children.push(
        node.slice(0, i) + ((+node[i] + 9) % 10).toString() + node.slice(i + 1)
      );
    }
    for (let child of children) {
      if (visited.has(child)) {
        continue;
      }
      visited.add(child);
      queue.push([child, steps + 1]);
    }
  }
  return -1;
};
