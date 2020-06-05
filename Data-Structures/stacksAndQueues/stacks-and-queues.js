'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    return this.top;
  }

  pop(){
    if(!this.top){
      return 'Stack is empty';
    }
    this.top = this.top.next;
    return this;
  }

  peek(){
    if(!this.top){
      return 'Stack is empty';
    }
    return this.top.value;
  }

  isEmpty(){
    return !this.top ? true : false; 
  }

}

class Queue {
  constructor(){
    this.front = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(!this.front){
      this.front = newNode;
      this.rear = newNode;
      return this;
    }
    this.rear.next = newNode;
    this.rear = newNode;
    return this;
  }

  dequeue(){
    if (!this.front){
      return 'Empty Queue';
    }
    if (!this.front.next){
      let value = this.front.value;
      this.front = null;
      this.rear = null;
      return value;
    }
    let value = this.front.value;
    this.front = this.front.next;
    return value;
  }

  peek(){
    if (!this.front){
      return 'Empty Queue';
    }
    return this.front.value;
  }

  isEmpty(){
    return !this.front ? true : false;
  }
}

module.exports = {Stack,Queue};