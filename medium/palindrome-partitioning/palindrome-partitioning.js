/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  search(0, result, [], s);
  return result;
};

var search = function (start, result, current, s) {
  if (start >= s.length) {
    result.push([...current]);
  }
  for (let end = start; end < s.length; end++) {
    if (isPalindrome(s, start, end)) {
      current.push(s.substr(start, end - start + 1));
      search(end + 1, result, current, s);
      current.pop();
    }
  }
};

var isPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
