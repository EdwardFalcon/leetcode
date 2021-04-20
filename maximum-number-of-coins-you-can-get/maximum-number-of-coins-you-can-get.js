/**
 * @param {number[]} piles
 * @return {number}
 */
 var maxCoins = function(piles) {
    piles.sort((a, b) => b - a);
    let result = 0;
    for(let i = 1, j = piles.length; i < j; i += 2, j--) {
        result += piles[i];
    }
    return result;
};