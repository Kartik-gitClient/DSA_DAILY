/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* plusOne(int* digits, int digitsSize, int* returnSize) {
    int lastIndex =digitsSize -1;
    int lastValue = digits[lastIndex];
    int *p = digits;

    int i , j;
    for( i = lastIndex ; i>=0 ; i-- ){
        if(digits[i] + 1 < 10){
            digits[i] = digits[i] + 1;
            *returnSize = digitsSize;
            return digits;
        }else{
            digits[i]=0;
        }
    }
    int *newArr = (int*)malloc(sizeof(int) * (digitsSize + 1));
    newArr[0] =1;
    for( j = 1 ; j <= digitsSize ; j++){
        newArr[j] = 0;
    }
    *returnSize = digitsSize + 1;
    return newArr;

}
//HERE DYNAMIC MEMORY ALLOCATION IS USED AS THE QUESTION REUIRED IT NIGGESHH
