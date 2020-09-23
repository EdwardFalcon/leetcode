/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {    
  return nums.reduce((p, c, i) => {
      p.splice(index[i], 0, c);
      return p;
  }, []);
};