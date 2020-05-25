'use strict';
const Node = require('./node');

class LinkedList {
  
  constructor(){
    this.head = null;
  }

  insert(value){
    let newNode = new Node(value);
    if (!this.head){
      this.head = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    
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

  toString(){
    let currentNode = this.head;

    if(!currentNode){
      console.log('NULL');
      return null;
    }

    let listString = '';

    while(currentNode.next){
      listString += ` { ${currentNode.value} } ->`;
      currentNode = currentNode.next;
    }
    
    listString += ` { ${currentNode.value} } -> NULL`;
    return listString;
  }
}

module.exports = LinkedList;