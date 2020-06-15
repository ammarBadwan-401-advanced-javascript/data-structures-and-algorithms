'use strict';

const Queue = require('../../Data-Structures/stacksAndQueues/stacks-and-queues').Queue;

// Code challenge solution is here
function breadthFirst(tree){
  let currentNode = tree.root;
  let breadth = new Queue;
  breadth.enqueue(currentNode);
  let results = [];
  
  while (breadth.peek()){
    let front = breadth.dequeue();
    results[results.length] = front.value;
    if (front.left){
      breadth.enqueue(front.left);
    }
    if (front.right){
      breadth.enqueue(front.right);
    }
  }
  return results;
}

module.exports = breadthFirst;