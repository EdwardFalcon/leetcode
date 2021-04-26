/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        const hor = Math.abs(points[i][0] - points[i - 1][0]);
        const ver = Math.abs(points[i][1] - points[i - 1][1]);
        result += Math.max(hor, ver);
    }
    return result;
};