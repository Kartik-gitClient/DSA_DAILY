/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let digit = 0;
    // let res = num;
    // let count = 0;
    let sum = 0;
    let product = 1;

    while(n > 0){
        digit = parseInt(n % 10);
        sum = sum + digit;
        product = product * digit;
        console.log(sum)
        n = parseInt(n/10)
    }

    console.log(sum);
    console.log(product);
    return product - sum
    
    
};