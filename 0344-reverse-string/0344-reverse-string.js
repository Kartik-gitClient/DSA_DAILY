/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp = 0;
    let Lptr = 0;
    let Rptr = s.length -1;

    while(Lptr <= Rptr){
            temp = s[Rptr];
            s[Rptr] = s[Lptr];
            s[Lptr] = temp;
            Lptr++
            Rptr--
    }
};