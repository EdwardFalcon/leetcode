/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
    let teams = 0;
    for (let i = 1; i < rating.length - 1; i++) {
        let rightGreater = 0;
        let rightLess = 0;
        let leftGreater = 0;
        let leftLess = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (rating[j] < rating[i]) {
                leftLess++;
            } else {
                leftGreater++;
            }
        }
        for (let j = i + 1; j < rating.length; j++) {
            if (rating[j] < rating[i]) {
                rightLess++;
            } else {
                rightGreater++;
            }
        }
        teams += (leftLess * rightGreater) + (rightLess * leftGreater);
    }
    return teams;
};