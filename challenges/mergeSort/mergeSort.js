'use strict';

function mergeSort(arr){
  let n = arr.length;
  if (n>1){
    let mid = n/2;
    let left = arr.slice(0,mid);
    let right = arr.slice(mid,n);

    mergeSort(left);
    mergeSort(right);
    merge(left,right,arr);
    return arr;
  }
}

function merge(left,right,arr){
  let i = 0;
  let j = 0;
  let k = 0;
  while(i<left.length && j<right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }


}
let jaja = [8,4,23,5,42,16,15,2];
console.log(mergeSort(jaja));
module.exports = mergeSort;