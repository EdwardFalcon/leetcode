/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const offsets = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const [startX, startY] = entrance;
  maze[startX][startY] = '+';
  const queue = [[startX, startY, 0]];
  while (queue.length) {
    const [x, y, dist] = queue.pop();
    for (const [dx, dy] of offsets) {
      const checkX = x + dx;
      const checkY = y + dy;
      if (
        checkX < 0 ||
        checkY < 0 ||
        checkX > maze.length - 1 ||
        checkY > maze[0].length - 1 ||
        maze[checkX][checkY] !== '.'
      ) {
        continue;
      }
      if (
        checkX === 0 ||
        checkY === 0 ||
        checkX === maze.length - 1 ||
        checkY === maze[0].length - 1
      ) {
        return dist + 1;
      }
      maze[checkX][checkY] = '+';
      queue.unshift([checkX, checkY, dist + 1]);
    }
  }
  return -1;
};
