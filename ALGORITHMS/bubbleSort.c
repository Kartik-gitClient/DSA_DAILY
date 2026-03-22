#include <stdio.h>

/* BUUBLE SORT(ASCENDING) =>
LEFT TO RIGHT => COMPARE BIG OR SMALL
SWAP WHEN LEFT IS BIGGER .
-NO. OF TIMES THE LOOP WILL RUN -> N-1 OF AN ARRAY,
WHERE N IS THE SIZE OF ARRAY.

*/
void bubbleSort(int *,int);
int main()
{
  int arr[6] = {5, 1, 4, 2, 10, 1};
  printf("This is the before BEFORE BUBBLE SORT\n [");
  for(int i = 0; i<=5 ; i++){
   printf("%d",arr[i]);
   printf("\n");
  }
  printf("]");

  //APPLYING THE BUBBLE SORT
  bubbleSort(arr,6);

   printf("This is the before AFTER BUBBLE SORT\n [");
  for(int i = 0; i<=5 ; i++){
   printf("%d",arr[i]);
   printf("\n");
  };
  printf("]");
  
}

void bubbleSort(int *arr, int n)
{
  int left;
  int right;
  int temp;

  for (left = 0; left < n - 1; left++)
  {
    for (right = 0 ; right < n-1-left; right++)
    {
      if (arr[right] > arr[right+1])
      {
        temp = arr[right];
        arr[right] = arr[right+1];
        arr[right+1] = temp;
      }
    }
  }
}
