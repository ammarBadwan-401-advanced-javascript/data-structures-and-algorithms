'use strict';
const LinkedList = require('./linkedlist');

class Hashmap {
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }

  hash(key){
    if (typeof key !== 'string'){
      key = key.toString();
    }
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
    }
    let result = this.map[hash].values();
    result.reduce((acc,val)=>{
      if (val[key]){
        acc.push(val);
      }
      return acc;
    },[]);
    return result;
  }

  contains(key){
    let hash = this.hash(key);
    if (!this.map[hash]){
      return false;
    }
    let result = this.map[hash].values();
    result.reduce((acc,val)=>{
      if (val[key]){
        acc.push(val);
      }
      return acc;
    },[]);
    return result.length > 0 ? true : false;
  }
}

module.exports = Hashmap;