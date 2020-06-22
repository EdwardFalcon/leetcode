/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
      ')': '(',
      ']': '[',
      '}': '{'        
  };
  const open = ['(', '{', '['];
  const stack = [];
  for(let c of s) {
      if (open.includes(c)) {
          stack.push(c);
          continue;
      }
      const t = stack.pop();
      if (map[c] !== t) {
          return false;
      }
      
  }    
  return stack.length == 0;    
};