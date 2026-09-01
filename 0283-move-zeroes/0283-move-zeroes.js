/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let temp = 0;
    let low = -1
    let high = low + 1;


    while(high < nums.length){
        // if(low == -1){
        //     continue;
        // }
        if(nums[high] != 0){
            low++;
            temp = nums[high];
            nums[high] = nums[low];
            nums[low] = temp;
            high++;
        }else{
            high++;
        }
      

    }
};