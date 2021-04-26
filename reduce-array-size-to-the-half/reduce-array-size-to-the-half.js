/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    const freq = arr.reduce((p, c) => {
        p[c] = (p[c] || 0) + 1;
        return p;
    }, {})
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    const half = arr.length / 2;
    for (let i = 0, count = 0; i < sorted.length; i++) {
        count += sorted[i][1];
        if (count >= half) {
            return i + 1;
        }
    }
};