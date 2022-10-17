/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const letters = Array(26).fill(0);
  for (let char of sentence) {
    const code = char.charCodeAt(0);
    letters[code - 97]++;
  }
  for (let letter of letters) {
    if (letter === 0) {
      return false;
    }
  }
  return true;
};
