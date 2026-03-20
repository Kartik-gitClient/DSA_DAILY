/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={};
    let Max=0;
    let res=0;
    for(let i = 0 ; i<nums.length ; i++){
            if(obj[nums[i]]){
                obj[nums[i]]=obj[nums[i]]+1;
            }else{
                obj[nums[i]]= 1;
            }
    }
    for(let key in obj){
        if(obj[key] > Max){
            Max=obj[key]
            res=key;
        }

    }
    return parseInt(res);
};
//nigga this was a good questionnn