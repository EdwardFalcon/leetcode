/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const freq = arr.reduce((p, c) => {
        p[c] = (p[c] || 0) + 1;
        return p;
    }, {});
    const lucky = Object.entries(freq)
        .filter(([key, value]) => key == value);
    if (lucky.length === 0) {
        return -1;
    }
    lucky.sort((a, b) => b[1] - a[1]);
    return lucky[0][1];
};