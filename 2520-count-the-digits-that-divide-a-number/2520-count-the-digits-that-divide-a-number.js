/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let digit = 0;
    let res = num;
    let count = 0;

    while(num > 0){
        digit = parseInt(num % 10);
        if(res % digit == 0){
            count++
        }
        
        num = parseInt(num / 10);
        // num = num/10;
        console.log(num);
    }
    console.log(num)
    return count
    
};