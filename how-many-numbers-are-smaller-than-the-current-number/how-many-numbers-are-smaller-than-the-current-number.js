/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const freq = nums.reduce((p, c) => {
      p[c] = p[c] ? p[c] + 1 : 1;
      return p;
  }, []);
  let max = 0;
  const acc = freq.map((n, i) => {
      const curr = max;
      max += (n || 0);
      return curr;
  });    
  return nums.map(n => acc[n]);    
};