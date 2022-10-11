/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const people = Array(n).fill(0);
  for (let i = 0; i < trust.length; i++) {
    people[trust[i][0] - 1]--;
    people[trust[i][1] - 1]++;
  }
  for (let i = 0; i < people.length; i++) {
    if (people[i] === n - 1) {
      return i + 1;
    }
  }
  return -1;
};
