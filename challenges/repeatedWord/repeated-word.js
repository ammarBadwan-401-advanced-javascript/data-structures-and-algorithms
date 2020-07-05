'use strict';

const Hashmap = require('../../Data-Structures/hashtable/hashtable');

function repeatedWord(text){
  let answer = 'No repeated word was found';
  let hash = new Hashmap(1024);
  let textArr = text.split(' ');

  for (let i = 0; i<textArr.length;i++){
    hash.add(textArr[i],textArr[i]);
    let result = hash.get(textArr[i]);
    console.log(i);
    if (result.length > 1){
      answer = textArr[i];
      break;
    }
  }
  return answer;
}

module.exports = repeatedWord;