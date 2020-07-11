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
      const adjacencies = this._adjacencyList.get(firstNode);
      adjacencies.push(new Edge(secondNode,weight));
    }
  }

  getNodes(){
    return this._adjacencyList.entries();
  }

  getNeighbors(node){
    if (this._adjacencyList.has(node)){
      return this._adjacencyList.get(node)[0];
    }
  }

  size(){
    return this._adjacencyList.size;
  }

}

const graph = new Graph();
let dog = new Node(1);
let cat = new Node(2);
graph.addNode(dog);
graph.addNode(cat);


graph.addEdge(dog,cat);

console.log(graph);
