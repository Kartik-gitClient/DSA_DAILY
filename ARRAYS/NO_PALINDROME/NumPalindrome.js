//LEETCODE WARNING:-
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) { return false;}
    let original = x.toString();
    return original === original.split('').reverse().join('');
  
};
//THIS SHIT TOO EASY IN JS NIGGA
