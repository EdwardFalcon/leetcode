/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    arr = [first];
    encoded.forEach((enc, i) => arr.push(enc ^ arr[i]));
    return arr;

};