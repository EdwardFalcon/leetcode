/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = ['1'];
  while (n > 1) {
    let temp = [];
    let count = 1;
    let char = result[0];
    for (let i = 1; i <= result.length; i++) {
      if (result[i] != char) {
        temp.push(count, char);
        count = 1;
        char = result[i];
      } else {
        count++;
      }
    }
    result = temp;
    n--;
  }
  return result.join('');
};
