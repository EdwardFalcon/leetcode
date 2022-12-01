/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const mid = s.length / 2;
  let a = 0;
  let b = 0;
  for (let i = 0; i < mid; i++) {
    a += vowels.includes(s[i].toLowerCase()) ? 1 : 0;
    b += vowels.includes(s[mid + i].toLowerCase()) ? 1 : 0;
  }
  return a === b;
};
