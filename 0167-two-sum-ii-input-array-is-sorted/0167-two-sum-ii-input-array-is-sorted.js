/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let Lptr = 0;
    let Rptr = nums.length -1;
    

    for(let i = 0 ; i<nums.length ; i++){
        
       if(nums[Lptr] + nums[Rptr] == target){
        return [Lptr+1,Rptr+1]
       }if(nums[Lptr] + nums[Rptr] > target){
        Rptr--;
       }if(nums[Lptr] + nums[Rptr] < target){
        Lptr++;
       }

    }
    
};