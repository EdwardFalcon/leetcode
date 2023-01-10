/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const rods = {};
  for (let i = rings.length - 1; i > 0; i = i - 2) {
    const rod = rings[i];
    const color = rings[i - 1];
    if (!rods[rod]) {
      rods[rod] = new Set();
    }
    rods[rod].add(color);
  }
  return Object.values(rods).filter((r) => r.size === 3).length;
};
