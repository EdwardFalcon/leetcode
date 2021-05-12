/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    const boxes = [];
    let max = 0;
    for (let i = lowLimit; i <= highLimit; i++) {
        const box = getSum(i);
        boxes[box] = (boxes[box] || 0) + 1;
        if (boxes[box] > max) {
            max = boxes[box];
        }
    }
    return max;
};

var getSum = function (num) {
    return String(num)
        .split('')
        .map(ch => Number(ch))
        .reduce((p, c) => p + c, 0);
}