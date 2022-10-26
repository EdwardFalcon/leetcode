/**
 * @param {number} n
 */
var SeatManager = function (n) {
  this.seats = Array(n).fill(1);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  for (let i = 0; i < this.seats.length; i++) {
    if (this.seats[i] === 1) {
      this.seats[i] = 0;
      return i + 1;
    }
  }
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  this.seats[seatNumber - 1] = 1;
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
