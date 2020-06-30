# Quick Sort

* This method takes a left and a right value, then determines a pivot and sorts it according to that pivot.

```Pseudo code
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

* That was the pseudo code provided, here is my implemented javascript version of it

```Javascript
function quickSort(arr,left,right){
  if(left < right){
    let position = partition(arr,left,right);
    quickSort(arr,left,position-1);
    quickSort(arr, position+1, right);
  }
  return arr;
}

function partition(arr,left,right){
  let pivot = arr[right];
  let low = left-1;
  for (let i = left; i<right;i++){
    if (arr[i] <= pivot){
      low++;
      swap(arr,i,low);
    }
  }
  swap(arr,right, low+1);
  return low+1;
}

function swap(arr,i,low){
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
```

## Trace

Sample Array: `[8,4,23,42,16,15]`

### Pass 1

```Javascript
Pivot is determined as the right value, so in this case it's 15

```


### Efficiency

* Time: O(n logn) because at it's worse, there will be a for loop and how many times its swapped.

* Space: O(n)  Because the memory allocated depends on how big the array itself is.