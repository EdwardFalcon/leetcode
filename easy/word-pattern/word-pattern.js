/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  stringArray = s.split(' ');
  if (stringArray.length !== pattern.length) {
    return false;
  }
  stringHash = new Map();
  letterSet = new Set();
  for (let i = 0; i < pattern.length; i++) {
    const str = stringArray[i];
    const letter = pattern[i];
    const hashed = stringHash.get(letter);
    if ((hashed && hashed !== str) || (!hashed && letterSet.has(str))) {
      return false;
    }
    stringHash.set(letter, str);
    letterSet.add(str);
  }
  return true;
};
