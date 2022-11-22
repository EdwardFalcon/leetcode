/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function (trees) {
  trees.sort((x, y) => (x[0] === y[0] ? x[1] - y[1] : x[0] - y[0]));
  const lower = [];
  const upper = [];
  for (const tree of trees) {
    while (
      lower.length >= 2 &&
      cmp(lower[lower.length - 2], lower[lower.length - 1], tree) > 0
    )
      lower.pop();
    while (
      upper.length >= 2 &&
      cmp(upper[upper.length - 2], upper[upper.length - 1], tree) < 0
    )
      upper.pop();
    lower.push(tree);
    upper.push(tree);
  }
  return [...new Set(lower.concat(upper))];
};

const cmp = (p1, p2, p3) => {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;
  return (y3 - y2) * (x2 - x1) - (y2 - y1) * (x3 - x2);
};
