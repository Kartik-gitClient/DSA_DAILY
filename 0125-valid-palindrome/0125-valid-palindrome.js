/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let arr = cleanStr.split("");
    console.log(arr);
    let Lptr = 0;
    let Rptr = cleanStr.length  - 1;

    while(Lptr < Rptr){
        if(arr[Lptr] == arr[Rptr]){
            Lptr++;
            Rptr--
        }
        else{
            return false;
        }
    }
    return true

    
};