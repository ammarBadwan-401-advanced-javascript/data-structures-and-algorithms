'use strict';

const LinkedList = require('../linked-list');

describe('Linked list function tests', ()=>{
  it('Instantiate an empty Linked List',()=>{
    let testLinkedList = new LinkedList;
    expect(testLinkedList.head).toBeNull();
  });
});
