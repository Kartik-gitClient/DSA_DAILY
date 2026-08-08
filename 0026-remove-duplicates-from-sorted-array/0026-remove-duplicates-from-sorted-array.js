/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let Lptr = 0;

    for(let Rptr = 0; Rptr < nums.length ; Rptr++){
        if(nums[Rptr] != nums[Rptr-1]){
            nums[Lptr] = nums[Rptr];
            Lptr++
        }
    }

    return Lptr

};