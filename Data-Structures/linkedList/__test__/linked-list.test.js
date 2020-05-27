'use strict';

const LinkedList = require('../linked-list');

describe('Linked list function tests', ()=>{
  it('Instantiate an empty Linked List',()=>{
    let testLinkedList = new LinkedList;
    expect(testLinkedList.head).toBeNull();
  });

  it('Inserts into a Linked List properly',()=>{
    let testLinkedList = new LinkedList;
    testLinkedList.insert(5);
    expect(testLinkedList.head.value).toEqual(5);
  });

  it('Head property will properly point to the first node in the LL',()=>{
    let testLinkedList = new LinkedList;
    testLinkedList.insert('Testing');
    expect(testLinkedList.head).toEqual({value: 'Testing', next: null});
  });

  it('Can properly insert multiple nodes into the linked list',()=>{
    let testLinkedList = new LinkedList;
    testLinkedList.insert('test3');
    testLinkedList.insert('test2');
    testLinkedList.insert('test1');
    expect(testLinkedList.head.next.next.value).toEqual('test3');
  });

  it('Will return true when finding a value within the linked list that exists',()=>{
    let testLinkedList = new LinkedList;
    testLinkedList.insert('good');
    testLinkedList.insert('fun');
    expect(testLinkedList.includes('good')).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist',()=>{
    let testLinkedList = new LinkedList;
    testLinkedList.insert('good');
    testLinkedList.insert('fun');
    expect(testLinkedList.includes('cake')).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let testLinkedList = new LinkedList;
    testLinkedList.insert('c');
    testLinkedList.insert('b');
    testLinkedList.insert('a');
    expect(testLinkedList.toString()).toEqual(' { a } -> { b } -> { c } -> null');
  });

});
