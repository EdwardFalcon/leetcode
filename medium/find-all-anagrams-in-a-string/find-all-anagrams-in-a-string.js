/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const count = new Array(26).fill(0);
  const temp = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    count[getIndex(p, i)]++;
    temp[getIndex(s, i)]++;
  }
  const result = [];
  for (let i = 0; i < s.length - p.length + 1; i++) {
    if (compare(count, temp)) {
      result.push(i);
    }
    temp[getIndex(s, i)]--;
    temp[getIndex(s, i + p.length)]++;
  }
  return result;
};

var compare = function (count1, count2) {
  for (let i = 0; i < 26; i++) {
    if (count1[i] !== count2[i]) {
      return false;
    }
  }
  return true;
};

var getIndex = function (str, pos) {
  return str.charCodeAt(pos) - 97;
};
