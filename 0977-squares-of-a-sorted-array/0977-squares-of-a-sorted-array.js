/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i = 0; i<nums.length ; i++){
        nums[i] = nums[i] * nums[i]
    }
    let sorted = nums.sort((a,b) => a-b); // complexity O(n log n);

    return sorted;
    
};