/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const arr = boxes.split('');
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        let count = 0;
        for(let j = 0; j < arr.length; j++) {
            if (arr[j] === '1') {
                count += Math.abs(j - i);
            }
        }
        result[i] = count;
    }    
    return result;
};