/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if(nums.length == 0) return 0;
    let Lptr = 0;
    // let Rptr = Lptr+1;
    // let temp=0;
    // let count = 0;
    // let temp = 0;

    for (let Rptr = Lptr; Rptr < nums.length; Rptr++) {
        if (nums[Rptr] != nums[Rptr - 1]) {
            nums[Lptr] = nums[Rptr]
            Lptr++;
            // Rptr++;

        }
    }
    console.log(nums)
    return Lptr

};