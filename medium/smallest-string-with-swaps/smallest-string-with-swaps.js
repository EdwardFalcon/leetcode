/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const roots = Array(s.length).fill(-1);
  for (let [x, y] of pairs) {
    const rootX = find(roots, x);
    const rootY = find(roots, y);
    if (rootX !== rootY) {
      union(roots, rootX, rootY);
    }
  }
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const root = find(roots, i);
    if (!map[root]) {
      map[root] = [];
    }
    map[root].push(i);
  }
  const result = [];
  for (let indecies of Object.values(map)) {
    const str = [];
    for (let pos of indecies) {
      str.push(s[pos]);
    }
    str.sort();
    for (let i = 0; i < indecies.length; i++) {
      result[indecies[i]] = str[i];
    }
  }
  return result.join('');
};

var union = function (roots, x, y) {
  const rootX = find(roots, x);
  const rootY = find(roots, y);
  if (rootX !== rootY) {
    roots[rootY] = rootX;
  }
};

var find = function (roots, x) {
  if (roots[x] === -1) {
    return x;
  }
  return (roots[x] = find(roots, roots[x]));
};
