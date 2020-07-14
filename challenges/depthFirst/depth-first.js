'use strict';

const Graph = require('../../Data-Structures/graph/graph').Graph;

function depthFirst(graphList){
  let nodesArr = [];

  for(let node of graphList){
    nodesArr.push(node);
  }
  console.log(nodesArr[0][0].value);
  let results = [];
  results.push(nodesArr[0][0].value);
  if (nodesArr[0][1].length>0){
    for (let i = 0; i<nodesArr[0][1].length; i++){
      results.push(nodesArr[0][1][i].node.value)
    }
  }
  return results
}

