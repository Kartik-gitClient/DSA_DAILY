/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    let flag = 0;
//     let a =nums[0]
//     let b = nums[1]
//     let c = nums[2]
// a + b > c
// a + c > b
// b + c > a

nums.sort((a, b) => a - b);

if (nums[0] + nums[1] <= nums[2]) {
    return "none";
}

    // for(let i =0 ; i<nums.length ; i++){
    //     if(nums[i] == nums[i+1] && nums[i] == nums[i+1]){
    //         flag++
    //     }
    // }

    if( nums[1] == nums[0] && nums[1] == nums[2]){
        return "equilateral"
    }
    else if(nums[1] == nums[0] || nums[1] == nums[2] || nums[0] == nums[2]){
        return "isosceles"
    }else{
        return "scalene"
    }
    // if(flag == 1){
    //     return "isosceles"
    // }if(flag == 2){
    //     return "equilateral"
    // }else{
    //     return "scalene"
    // }
    
};