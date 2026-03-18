/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    lastIndex = digits.length - 1;
    lastvalue = digits[lastIndex];

    for (let i = lastIndex; i >= 0; i--) {
        if (digits[i] + 1 < 10) {
            digits[i] = digits[i] + 1;
            return digits;

        } else {
            digits[i] = 0;


        }
    }
    digits.unshift(1);
    return digits;

};