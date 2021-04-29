/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
    const result = [];
    const check = (offsetX, offsetY) => {
        let row = king[0]
        let col = king[1];
        while (row >= 0 && row <= 7 && col >= 0 && col <= 7) {
            row += offsetX;
            col += offsetY;
            for (queen of queens) {
                if (queen[0] === row && queen[1] === col) {
                    result.push(queen);
                    return;
                }
            }
        }
    };
    check(0, 1);
    check(1, 1);
    check(1, 0);
    check(1, -1);
    check(0, -1);
    check(-1, -1);
    check(-1, 0);
    check(-1, 1);
    return result;
};
