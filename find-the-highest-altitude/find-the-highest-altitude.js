/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curr = 0;
    let max = curr;
    gain.forEach(g => {
        curr += g;
        if (curr > max) {
            max = curr;
        }
    });    
    return max;
};