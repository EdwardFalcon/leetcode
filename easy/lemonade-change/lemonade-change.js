/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let change = [0, 0];
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      change[0]++;
      continue;
    }
    if (change[0] === 0) {
      return false;
    }
    if (bills[i] === 10) {
      change[0]--;
      change[1]++;
      continue;
    }
    change[0]--;
    if (change[1] > 0) {
      change[1]--;
    } else if (change[0] < 2) {
      return false;
    } else {
      change[0] -= 2;
    }
  }
  return true;
};
