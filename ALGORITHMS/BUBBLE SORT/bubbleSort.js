
//BUBBLE SORT
const bubbleSort = (arr) =>{
  let n = arr.length;
  let temp=0;
  let left;
  let right;
  for(left = 0; left < n-1 ; left++){
    for(right = 0; right < n-1-left ; right++){ // the condition right < n-1-left states it ignores the last elements , which are sorted.
      if(arr[right] > arr[right+1]){
        temp = arr[right];
        arr[right]=arr[right+1];
        arr[right+1]=temp;
      }
    }
  }
}

let arr1=[1,10,2,3,4,5,6,7,8,7,9,11,3,2,5,4];
console.log("array BEFORE BUBBLE SORT..\n");
console.log(arr1);

//-----------APPLYING BUBBLE SORT------------

bubbleSort(arr1);
console.log("array AFTER BUBBLE SORT..\n");
console.log(arr1);
