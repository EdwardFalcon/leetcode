/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const index = word.indexOf(ch) + 1;
  if (ch === 0) {
    return word;
  }
  const arr = word.split('');
  return [...arr.slice(0, index).reverse(), ...arr.slice(index)].join('');
};
