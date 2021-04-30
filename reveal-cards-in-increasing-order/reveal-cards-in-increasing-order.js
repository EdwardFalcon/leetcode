/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => b - a);
    const result = [deck.shift()];
    deck.forEach(card => {
        result.unshift(result.pop());
        result.unshift(card);
    });
    return result;
};