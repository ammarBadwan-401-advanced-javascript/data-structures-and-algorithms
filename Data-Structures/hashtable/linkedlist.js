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
    
    listString += ` { ${currentNode.value} } -> ${currentNode.next}`;
    return listString;
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

  insertBefore(value,newVal){
    let newNode = new Node(newVal);
    let currentNode = this.head;

    if(currentNode.value === value){
      newNode.next = currentNode;
      this.head = newNode;
      return this;
    }

    while(currentNode.next.value !== value){
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  insertAfter(value,newVal){
    let newNode = new Node(newVal);
    let currentNode = this.head;
    while(currentNode.value !== value){
      currentNode = currentNode.next;
    }
    // To place the "after" as the next value for the new node
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  kthFromEnd(k){
    let currentNode = this.head;
    if(!currentNode){
      return 'Linked list is empty.';
    }

    let linkedArray = [];

    while(currentNode){
      linkedArray[linkedArray.length] = currentNode.value;
      currentNode = currentNode.next;
    }

    if(k>linkedArray.length-1 || k < 0 || k === undefined || typeof k !== 'number'){
      return 'Exception';
    }

    let reveresdIndex = (k - (linkedArray.length-1)) * -1;
    return linkedArray[reveresdIndex];
  }

}

module.exports = LinkedList;