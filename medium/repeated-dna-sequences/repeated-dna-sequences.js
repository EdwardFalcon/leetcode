/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let lastDna = s.slice(0, 10);
  const checkedDna = new Set([lastDna]);
  const result = new Set();
  for (let i = 10; i < s.length; i++) {
    const curentDna = lastDna.slice(1) + s[i];
    if (checkedDna.has(curentDna)) {
      result.add(curentDna);
    } else {
      checkedDna.add(curentDna);
    }
    lastDna = curentDna;
  }
  return [...result];
};
