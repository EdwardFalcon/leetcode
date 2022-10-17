/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length <= 2) {
    return points.length;
  }
  let result = 0;
  for (let i = 0; i < points.length; i++) {
    const map = {};
    let duplicate = 0;
    let max = 0;
    for (let j = i + 1; j < points.length; j++) {
      let dx = points[j][0] - points[i][0];
      let dy = points[j][1] - points[i][1];
      if (dx === 0 && dy === 0) {
        duplicate++;
        continue;
      }
      const gcd = getGcd(dx, dy);
      dx = dx / gcd;
      dy = dy / gcd;
      const key = `${dx};${dy}`;
      if (map[key] === undefined) {
        map[key] = 0;
      }
      map[key]++;
      max = Math.max(max, map[key]);
    }
    result = Math.max(result, max + duplicate + 1);
  }
  return result;
};

var getGcd = function (a, b) {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};
