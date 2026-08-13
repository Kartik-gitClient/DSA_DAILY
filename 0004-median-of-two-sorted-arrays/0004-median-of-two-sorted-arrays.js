/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    function quicksort(array , low ,high){
        if(low >= high){
            return;
        }
        let pivot = partition(array , low , high);
        quicksort(array , low , pivot - 1);
        quicksort(array , pivot + 1 , high)
    }

    function partition(array , low , high){
        let pivot = array[high];
        let i = low - 1;

        for(let j = low ; j<= high - 1 ; j++){
            if(array[j] < pivot){
                i++;
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        i++;
        let temp = array[high];
        array[high] = array[i];
        array[i] = temp;

        return i;
    }
    let merged = nums1.concat(nums2);
    quicksort(merged , 0 , merged.length- 1);
    let len = merged.length
    console.log(merged);
    console.log(len)
    if(len % 2 == 0){

        return (merged[parseInt(len/2)] + merged[parseInt(len/2 - 1)]) / 2;
    }else{
        return merged[parseInt(len/2)];
    }


};
