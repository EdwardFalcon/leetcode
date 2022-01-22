/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineCount = new Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    magazineCount[magazine.charCodeAt(i) - 97] += 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const charCode = ransomNote.charCodeAt(i) - 97;
    magazineCount[charCode] -= 1;
    if (magazineCount[charCode] < 0) {
      return false;
    }
  }
  return true;
};
