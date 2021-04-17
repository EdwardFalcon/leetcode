/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const result = [0];
      let start = 0;
      let end = 1;
      for (let i = 1; i <= num; i++) {
          result[i] = result[start++] + 1;
          if (start >= end) {            
              start = 0;
              end = i + 1;
          }
      }
      return result;
  };