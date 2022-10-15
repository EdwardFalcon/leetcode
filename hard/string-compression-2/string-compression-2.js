/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
  const map = new Map();
  const search = (i, char, count, k) => {
    if (k < 0) {
      return Infinity;
    }
    if (i >= s.length) {
      return 0;
    }
    const key = `${i}#${char}#${count}#${k}`;
    if (key in map) {
      return map[key];
    }
    if (s[i] === char) {
      const inc = [1, 9, 99].includes(count) ? 1 : 0;
      map[key] = inc + search(i + 1, char, count + 1, k);
    } else {
      map[key] = Math.min(
        1 + search(i + 1, s[i], 1, k),
        search(i + 1, char, count, k - 1)
      );
    }
    return map[key];
  };
  return search(0, '', 0, k);
};
