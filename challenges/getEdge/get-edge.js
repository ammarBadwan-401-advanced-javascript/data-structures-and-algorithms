'use strict';

const Graph = require('../../Data-Structures/graph/graph').Graph;
const Node = require('../../Data-Structures/graph/graph').Node;

function getEdges(graph,arr){
  if(!graph || !arr) return 'Wrong Graph/Arr';
  let price = 0;
  let airports = graph.getNodes();
  for(let i = 0; i<arr.length; i++){
    let currentAirport;
    console.log('airport');
    console.log(airports[0].node.value)
    for(let q = 0; q<airports.length; q++){
      if(airports[q].node.value === arr[i]){
        currentAirport = airports[q];
      }
    }
    console.log('This is the currentAirport');

    console.log(currentAirport)
    if(currentAirport){
      for (let edge of currentAirport.Edge ){
        if(edge.node.value){
          price += edge.weight;
        }
      }
    } else {return false;}
  }
  return `${true} , ${price}`;
}

const graph = new Graph();

let Narnia = new Node('Narnia');
let Naboo = new Node('Naboo');
let Metroville = new Node('Metroville');
let Arendelle = new Node('Arendelle');

graph.addNode(Narnia);
graph.addNode(Naboo);
graph.addNode(Metroville);
graph.addNode(Arendelle);

graph.addEdge(Narnia,Metroville,37);
graph.addEdge(Narnia,Naboo,250);
graph.addEdge(Metroville,Naboo,26);
graph.addEdge(Metroville,Arendelle,99);

console.log(getEdges(graph,['Narnia','Arendelle']));