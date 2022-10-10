/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn > 8) {
    return [];
  }
  const hoursBits = [];
  for (let i = 0; i < 12; i++) {
    const bits = countBits(i);
    if (!hoursBits[bits]) {
      hoursBits[bits] = [];
    }
    hoursBits[bits].push(i);
  }
  const minutesBits = [];
  for (let i = 0; i < 60; i++) {
    const bits = countBits(i);
    if (!minutesBits[bits]) {
      minutesBits[bits] = [];
    }
    minutesBits[bits].push(i < 10 ? `0${i}` : i);
  }
  const result = [];
  for (let hour = 0; hour < hoursBits.length; hour++) {
    for (let minute = 0; minute < minutesBits.length; minute++) {
      if (hour + minute !== turnedOn) {
        continue;
      }
      for (let i = 0; i < hoursBits[hour].length; i++) {
        for (let j = 0; j < minutesBits[minute].length; j++) {
          const time = `${hoursBits[hour][i]}:${minutesBits[minute][j]}`;
          result.push(time);
        }
      }
    }
  }
  return result;
};

var countBits = function (num) {
  let count = 0;
  while (num) {
    num = num & (num - 1);
    count++;
  }
  return count;
};
