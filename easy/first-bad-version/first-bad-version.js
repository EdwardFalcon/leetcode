/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let startVersion = 1;
    let endVersion = n;
    while (startVersion <= endVersion) {
      const mid = Math.floor((startVersion + endVersion) / 2);
      if (isBadVersion(mid)) {
        endVersion = mid - 1;
      } else {
        startVersion = mid + 1;
      }
    }
    return startVersion;
  };
};
