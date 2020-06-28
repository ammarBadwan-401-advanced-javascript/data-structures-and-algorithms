'use strict';

function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let j = i-1;
    let temp = arr[i];
    // console.log(i);
    while (j>=0 && temp < arr[j]){
    //   console.log('Before: ' + arr);
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1] = temp;
    // console.log('After: ' + arr);
  }
  return arr;
}

module.exports = insertionSort;
