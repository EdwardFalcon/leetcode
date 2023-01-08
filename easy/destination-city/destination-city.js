/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const cities = paths.reduce((map, [cityA, cityB]) => {
    if (!map[cityA]) {
      map[cityA] = 0;
    }
    if (!map[cityB]) {
      map[cityB] = 0;
    }
    map[cityA]++;
    return map;
  }, {});
  for (let name in cities) {
    if (cities[name] === 0) {
      return name;
    }
  }
};
