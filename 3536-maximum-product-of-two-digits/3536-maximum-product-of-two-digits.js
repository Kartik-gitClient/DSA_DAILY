/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let arrN = Array.from(String(n), Number); 
    let max = 1;
    let ptr = 0;
    let prod = 0;
    // let arr =
    console.log(arrN)
    if(n <= 99){
        a = parseInt(n % 10);
        n = n/10;
        b = parseInt(n % 10);
        n = n / 10;
        prod = a * b
        console.log(a , b)
    }
    else{
    for(let i = 0; i<arrN.length ; i++){
        if(arrN[max] <= arrN[i]){
            max = i
        }
        // prod = arr[ptr] * max
        // max = max * arrN[i];
    }
    for(let i = 0; i<arrN.length ; i++){
        if(i == max){
            continue
        }
        if(prod < arrN[max]*arrN[i]){
            prod =arrN[max]*arrN[i] 
        }
    }}
    console.log(max)
    return prod;
            
    
};