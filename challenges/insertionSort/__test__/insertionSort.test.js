'use strict';

const insertionSort = require('../insertionSort');

describe('Insertion Sort',()=>{
  it('Sorts an array',()=>{
    expect(insertionSort([8,4,23,42,16,15])).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('Sorts a Reverse-sorted array',()=>{
    expect(insertionSort([20,18,12,8,5,-2])).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('Sorts a few uniques array',()=>{
    expect(insertionSort([5,12,7,5,5,7])).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('sorts strings',()=>{
    expect(insertionSort(['a','c','b','u','a','dad'])).toEqual(['a', 'a', 'b', 'c', 'dad', 'u']);
  });
    
});