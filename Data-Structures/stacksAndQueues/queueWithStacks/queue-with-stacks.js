'use strict';

let Stack = require('../stacks-and-queues').Stack;

class PseudoQueue {
  constructor(){
    this.front = null;
  }

  enqueue(value){
    if(!this.front){
      let newValue = new Stack;
      newValue.push(value);
      this.front = newValue.top;
      this.rear = newValue.top;
      return this.front.value;
    }
    let newValue = new Stack;
    newValue.push(value);
    if(!this.rear){
      this.rear = newValue.top;
      return this;
    }
    this.rear.next = newValue.top;
    this.rear = newValue.top;
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
}

module.exports = PseudoQueue;