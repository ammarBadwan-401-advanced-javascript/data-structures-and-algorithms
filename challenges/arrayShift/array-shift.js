'use strict';
function insertShiftArray(arr,value){
  let middleIndex = arr.length/2;
  let newArr = [];
  for (let i=0;i<middleIndex;i++){
    newArr[newArr.length] = arr[i];
  }
  newArr[newArr.length] = value;
  for (let q = newArr.length-1;q<arr.length;q++){
    newArr[newArr.length]= arr[q];
  }
  return newArr;
}
module.exports = insertShiftArray;