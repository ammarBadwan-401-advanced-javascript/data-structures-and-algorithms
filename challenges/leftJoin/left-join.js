'use strict';

const Hashmap = require('../../Data-Structures/hashtable/hashtable');

function leftJoin (leftHash,rightHash){
  let mainResult = [];

  let mapIndex = Object.keys(leftHash.map);
  for (let i = 0; i<mapIndex.length;i++){
    let key = Object.keys(leftHash.map[mapIndex[i]].head.value);
    let iterationResult = [key[0], leftHash.map[mapIndex[i]].head.value[key] ];
    let secondHash = rightHash.get(key);
    if (secondHash){
      iterationResult[iterationResult.length] = secondHash[0][key];
    } else 
    {iterationResult[iterationResult.length] = null;}
    mainResult[mainResult.length] = iterationResult;
  }

  return mainResult;
}


let firstOne = new Hashmap(1024);
let secondOne = new Hashmap(1024);

firstOne.add('Cat','Fluffy');
firstOne.add('Dog','Spiky');
firstOne.add('Bird','Tweety');
firstOne.add('Bear','Ursa');

secondOne.add('Cat','Tom');
secondOne.add('Mouse','Jerry');
secondOne.add('Bear','Alfredo');


console.log(leftJoin(firstOne,secondOne));


module.exports = leftJoin;