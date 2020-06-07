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
      return this.front.value;
    }
    // let rearQueue = this.rear;
    let theQueue = this.front;
    while(theQueue.next){
      theQueue = theQueue.next;
    }
    let newValue = new Stack;
    newValue.push(value);
    theQueue.next = newValue.top;
    this.rear = newValue.top;
    return this;
  }
}

module.exports = PseudoQueue;