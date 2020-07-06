'use strict';

const Hashmap = require('../../Data-Structures/hashtable/hashtable');

const BinaryTree = require('../../Data-Structures/tree/tree').BinaryTree;

const Node = require('../../Data-Structures/tree/tree').Node;

function treeIntersection(firstTree, scondTree){
  let result = [];
  let hash = new Hashmap(1024);
  let firstTreeResult = firstTree.preOrder();
  let secondTreeResult = secondTree.preOrder();
  for (let i = 0; i<firstTreeResult.length; i++){
    hash.add(firstTreeResult[i]);
  }

  for (let q = 0; q<secondTreeResult.length; q++){
    hash.add(secondTreeResult[q],secondTreeResult[q] );
    let hashLength = hash.get(secondTreeResult[q]);
    if (hashLength.length > 1){
      result.push(secondTreeResult[q]);
    }
  }
  return result;
}







// Tree creation and example:
// First Tree
let nodea = new Node(3);
let nodeb = new Node(5);
let nodec = new Node(11);
let noded = new Node(6);
let nodee = new Node(8);
let nodef = new Node(13);
nodea.left = nodeb;
nodea.right = nodec;
nodeb.left = noded;
nodeb.right = nodee;
nodec.left = nodef;
let firstTree = new BinaryTree(nodea);

// Second Tree
nodea = new Node(8);
nodeb = new Node(11);
nodec = new Node(7);
noded = new Node(17);
nodee = new Node(2);
nodef = new Node(1);
let nodeq = new Node(13);
nodea.left = nodeb;
nodea.right = nodec;
nodeb.left = noded;
nodeb.right = nodee;
nodec.left = nodef;
nodec.right = nodeq;
let secondTree = new BinaryTree(nodea);
// Function trial
console.log(treeIntersection(firstTree,secondTree));



module.exports = treeIntersection;