'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;

class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root){
    this.root = root;
  }

  preOrder(){
    let results = [];

    let _walk = (node)=>{
      results.push(node.value);
      if(node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder(){
    let results = [];

    let _walk = (node)=>{
      if(node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder(){
    let results = [];

    let _walk = (node)=>{
      if(node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  breadthFirst(){
    let currentNode = this.root;
    let theQueue = new Queue;
    theQueue.enqueue(currentNode);
    let results = [];
    while (!theQueue){
      results[results.length] = theQueue.front.value;
      theQueue.dequeue();
      if (currentNode.left){
        currentNode
      }

    }

  }
}

class BinarySearchTree {
  constructor(root){
    this.root = root;
  }

  add(value){
    let newNode = new Node(value);
    if(!this.root){
      this.root = new Node(value);
      return this;
    }
    let addition = (node) => {
      if(value < node.value){
        if(node.left){
          addition(node.left);
        } else { node.left = newNode;}
      } else if (value > node.value){
        if(node.right){
          addition(node.right);
        } else (node.right = newNode);
      }
    };
    addition(this.root);
    return this;
  }

  contains(value){
    let answer = false;
    if(!value || !this.root) return false;
    
    let search = (node) => {
      if(value === node.value){
        answer = true;
        return;
      } else if (value < node.value){
        if(node.left){
          search(node.left);
        }
      } else if (value > node.value){
        if(node.right){
          search(node.right);
        }
      }
    };
    search(this.root);
    return answer;
  }
}

let nodea = new Node('a');
let nodeb = new Node('b');
let nodec = new Node('c');
let noded = new Node('d');
let nodee = new Node('e');
let nodef = new Node('f');
nodea.left = nodeb;
nodea.right = nodec;
nodeb.left = noded;
nodeb.right = nodee;
nodec.left = nodef;



let theTree = new BinaryTree(nodea);

let theQueue = new Queue;
theQueue.enqueue(theTree.root);
// console.log(theQueue);
theQueue.dequeue();
// console.log(theQueue);
theQueue.enqueue(theTree.root.left);
console.log(theQueue);
theQueue.dequeue();
console.log(theQueue.isEmpty());

// console.log(theTree);
// console.log(theTree);
// let jaja = new Queue;
// jaja.enqueue(5);
// jaja.enqueue(4);
// jaja.enqueue(3);
// console.log(jaja);

module.exports = {Node,BinaryTree,BinarySearchTree};

