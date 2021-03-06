'use strict';

const LinkedList = require('../linked-list');

function mergeLists(list1,list2){
  let firstList = list1.head;
  let secondList = list2.head;
  let mergeResult = new LinkedList;

  while(firstList || secondList){
    if(firstList && secondList){
      mergeResult.append(firstList.value);
      mergeResult.append(secondList.value);
      firstList = firstList.next;
      secondList = secondList.next;
      continue;
    } else if (firstList && !secondList) {
      mergeResult.append(firstList.value);
      firstList = firstList.next;
    } else if (secondList && !firstList){
      mergeResult.append(secondList.value);
      secondList = secondList.value;
    }
  }
  return mergeResult;
}


module.exports = mergeLists;