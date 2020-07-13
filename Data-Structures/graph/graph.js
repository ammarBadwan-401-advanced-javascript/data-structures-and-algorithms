'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;

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

  addNode(node){
    this._adjacencyList.set(node,[]);
    return node;
  }

  addEdge(firstNode, secondNode, weight){
    if(!this._adjacencyList.has(firstNode) || !this._adjacencyList.has(secondNode)){
      console.log('Node does not exist');
    } else {
      const adjacencies = this._adjacencyList.get(firstNode);
      const secondWay = this._adjacencyList.get(secondNode);
      adjacencies.push(new Edge(secondNode,weight));
      secondWay.push(new Edge(firstNode,weight));
    }
  }

  getNodes(){
    let results = [];
    let entries = this._adjacencyList.entries();
    for (let node of entries){
      results[results.length] = {node:node[0],Edge:node[1]};
    }
    return results;
  }

  getNeighbors(node){
    if (this._adjacencyList.has(node)){
      return this._adjacencyList.get(node);
    }
  }

  size(){
    return this._adjacencyList.size;
  }

  breadthFirst(startNode){
    if(!startNode || !startNode.value) return 'Wrong node';
    const queue = new Queue;
    const vistedNodes = [];
    queue.enqueue(startNode);
    vistedNodes.push(startNode);

    while (!queue.isEmpty()) {
      const currentNode = queue.dequeue();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.node;
        if(vistedNodes.includes(neighborNode)) {
          continue;
        } else {
          vistedNodes.push(neighborNode);
        }
        queue.enqueue(neighborNode);
      }

    }
    return vistedNodes;
  }
}


// const graph = new Graph();
// let dog = new Node('Spiky');
// let cat = new Node('Fluffy');
// let mouse = new Node('Jerry');
// graph.addNode(dog);
// graph.addNode(cat);
// graph.addNode(mouse);


// graph.addEdge(dog,cat);
// graph.addEdge(dog,mouse);
// graph.addEdge(cat,mouse);

// console.log(graph);
// // console.log(graph.breadthFirst(dog));
// console.log(graph.getNodes());

module.exports = {Graph,Node};