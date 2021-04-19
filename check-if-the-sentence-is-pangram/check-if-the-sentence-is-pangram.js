/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (let char of sentence) {
        letters = letters.filter(l => l !== char);
        if (letters.length === 0) {
            return true;
        }
    }
    return false;
};