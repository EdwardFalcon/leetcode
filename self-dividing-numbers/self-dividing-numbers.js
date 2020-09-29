/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];
    for(let i = left; i <= right; i++) {        
        const digits = String(i).split('').map(c => Number(c));
        if (digits.some(d => d === 0)) {
            continue;
        }
        if (digits.every(d => i % d === 0)) {
            result.push(i);
        }
    }
    return result;    
};