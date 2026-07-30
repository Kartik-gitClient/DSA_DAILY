/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2);
    let sorted = merged.sort((a,b) => a-b);
    let len = merged.length
    console.log(len)
    if(len % 2 == 0){
        return (merged[parseInt(len/2)] + merged[parseInt(len/2 - 1)]) / 2;
    }else{
        return merged[parseInt(len/2)];
    }

};
