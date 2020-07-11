'use strict';

class Node {
  constructor(value){
    this.value = value;
  }  
}

class Edge {
  constructor(node,weight=0){
    this.node = node;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this._adjacencyList = new Map();
  }

  addNode(value){
    this._adjacencyList.set(value,[]);
    return value;
  }

  addEdge(firstNode, secondNode, weight){
    if(!this._adjacencyList.has(firstNode) || !this._adjacencyList.has(secondNode)){
      console.log('Node does not exist');
    } else {
      console.log('Node exists');
    }
  }
}

const graph = new Graph();
let dog = new Node(1);
let cat = new Node(2);
graph.addNode(dog);
graph.addNode(cat);


graph.addEdge(dog,cat);

console.log(graph);
