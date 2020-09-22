/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let result = 0;
  let count = 0;    
  for(char of s) {
      count += char === 'R' ? 1 : -1;        
      if (count === 0) {
          result++;            
      }        
  }
  return result;
};