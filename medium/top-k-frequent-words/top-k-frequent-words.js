/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const count = {};
  words.forEach((word) => {
    if (!count[word]) {
      count[word] = 0;
    }
    count[word]++;
  });
  const pairs = Object.entries(count);
  pairs.sort((a, b) => {
    if (a[1] != b[1]) {
      return b[1] - a[1];
    }
    return a[0] < b[0] ? -1 : 1;
  });

  return pairs.map((item) => item[0]).slice(0, k);
};
