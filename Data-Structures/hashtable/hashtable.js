'use strict';
const LinkedList = require('./linkedlist');

class Hashmap {
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }

  hash(key){
    return key.split('').reduce((acc,val)=>{
      return acc + val.charCodeAt();
    },0)* 599 % this.size;
  }

  add(key,value){
    let hash = this.hash(key);
    if(!this.map[hash]){
      this.map[hash] = new LinkedList();
    }
    let entry = {[key]:value};
    this.map[hash].add(entry);
  }

  get(key){
    let hash = this.hash(key);
    if (!this.map[hash]){
      return null;
    } else {
      return this.map[hash].head.value;
    }
  }
}

module.exports = Hashmap;