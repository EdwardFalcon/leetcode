/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let max = 0;
    let count = 0;
    for(let ch of s) {
        count += ch === '(' ? 1 : ch === ')' ? -1 : 0;
        max = count > max ? count : max;
    }
    return max;
};