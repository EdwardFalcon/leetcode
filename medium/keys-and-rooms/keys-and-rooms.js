/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  visited.add(0);
  const keys = rooms[0];
  while (visited.size !== rooms.length && keys.length) {
    const key = keys.pop();
    if (!visited.has(key)) {
      visited.add(key);
      keys.push(...rooms[key]);
    }
  }
  return visited.size === rooms.length;
};
