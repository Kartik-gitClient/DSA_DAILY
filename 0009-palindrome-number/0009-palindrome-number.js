/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let original = x.toString();
    let reversed = x.toString().split('');
    reversed.reverse();
    let flag =0;

    for(let i = 0;i<original.length; i++){
    if(original[i] == reversed[i]){
        flag=0;
    }else{
        flag = 1;
        break;
    }
    }
    if(flag == 1){
        return false;
    }else{
        return true;
    }

};