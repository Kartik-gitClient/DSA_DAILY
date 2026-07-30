/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var isMiddleElementUnique = function(nums) {
//     if(nums.length == 1){ return true};
//     // let sorted = nums.sort((a,b) => a-b);
//     let sorted = nums

//     let mid =  parseInt(sorted.length/2);
//     let flag = 1;
//     // for(let  i = 0 ; i<sorted.length ; i++){

//     // }
//     console.log(mid-1);
//     console.log(sorted);
//     if(sorted[mid] == sorted[mid-1] || sorted[mid] == sorted[mid+1]){
//         return false;
//     }else{
//         return true;
//     }
        
// };


var isMiddleElementUnique = function(nums) {
    let mid = parseInt(nums.length/2);
    let count = 0;

    for(let i = 0 ; i<nums.length ; i++){
        if(nums[i] == nums[mid]){
            count++
        }
    }
    if(count > 1){
        return false;
    }else{
        return true;
    }

}