/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed.split(''));
    return words.filter(word => {
        for (let ch of word) {
            if (!allowedSet.has(ch)) {
                return false;
            }
        }
        return true;
    }).length;
};