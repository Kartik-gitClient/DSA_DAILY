#include <stdbool.h>
// APPROACH 1 BRUTE FORCE 
// bool isPalindrome(int x) {
//     if (x < 0) {
//         return false;
//     }

//     char* arr = (char*)malloc(sizeof(int) * 22);
//     sprintf(arr, "%d", x);
//     char* p = arr;
//     char* q = arr;
//     int flag = 0;

//     while (*q != '\0') {
//         q++;
//     }
//     q--;

//     while (p < q) {
//         if (*p == *q) {
//             p++;
//             q--;
//         } else {
//             flag = 1;
//             break;
//         }
//     }
//     if (flag == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//THIS IS UNOPTIMISED AS THE COMPLEXITY IS HIGH !

// APPROACH 2 => EXTRACTION OF LAST DIGIT!
bool isPalindrome(int x){
    if(x < 0){
        return false;
    }

    int original = x;
    long reversed = 0;

    while(x > 0){
        int digits = x % 10;
        reversed = (reversed * 10) + digits;
        x = x / 10;
    }
    return original == reversed;
}
//THIS IS A BIT OPTIMISED ! AS IT USES DIGIT EXTRACTION USING MOD AND DIVIDE;