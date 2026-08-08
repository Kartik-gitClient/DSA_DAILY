/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // nums.sort((a,b) => a-b); ONLY IF NOT SORTED.
    // let mid = 0;
    let low = 0;
    let high = nums.length -1;
    let res = null;

    while(low <= high){
        let mid = parseInt((low + high) / 2);
        if(nums[mid] < target){
            low = mid+1
        }else if(nums[mid] > target){
            high = mid-1
        }else if(nums[mid] == target){
            return mid;
        }
    }
    return  -1
};