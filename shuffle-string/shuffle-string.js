/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    const result = [];
    indices.forEach((pos, index) => result[pos] = s[index]);
    return result.join('');
};