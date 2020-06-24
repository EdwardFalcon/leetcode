/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {    
  let res = [1, 1];    
  for (let i = 2; i <= n; i++) {
      res[i] = 0;        
      for (let j = 1; j <= i; j++) {
          res[i] += res[j - 1] * res[i - j];
      }        
  }    
  return res[n];    
};