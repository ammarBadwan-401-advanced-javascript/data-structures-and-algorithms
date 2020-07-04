'use strict';
const Node = require('./node');

class LinkedList {
  
  constructor(){
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }

  includes(value){
    let currentNode = this.head;

    if(!currentNode){
      return false;
    }

    if(currentNode.value === value){
      return true;
    }

    while(currentNode.next){
      if (currentNode.next.value === value){
        return true;
      } else if(!currentNode.next){
        return false;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  append(value){
    let newNode = new Node(value);
    let currentNode = this.head;

    if(!this.head){
      this.head = newNode;
      return this;
    }
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }


}

module.exports = LinkedList;