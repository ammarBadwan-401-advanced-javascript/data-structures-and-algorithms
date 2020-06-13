'use strict';

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

module.exports = {Node,BinaryTree,BinarySearchTree};