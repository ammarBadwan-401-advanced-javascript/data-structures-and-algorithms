'use strict';

const arrayBinarySearch = require('../array-binary-search');

describe('Array Binary Search',()=>{
  it('Returns the right index of the number in a sorted array',()=>{
    expect(arrayBinarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });
  
});