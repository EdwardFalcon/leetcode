/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    return startTime.reduce((p, c, i) => p + (queryTime >= c && queryTime <= endTime[i]), 0);    
};