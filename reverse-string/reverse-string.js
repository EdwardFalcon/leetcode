/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    helper(s, 0, s.length - 1);
};

var helper = function(s, left, right)  {
    if (left >= right) {
        return;
    }
    const temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
    helper(s, left, right);
}