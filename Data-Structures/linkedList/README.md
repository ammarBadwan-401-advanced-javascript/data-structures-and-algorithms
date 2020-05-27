# Singly Linked List

* Singly linked lists are nodes that contain 2 types of information, their value and a pointer to the next node.

## Challenge
1- Create and instantiate an empty Linked List

2- Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

3- Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

4- Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List.

## Approach & Efficiency

* Created a module for node class, another module for linked list class and then I added the methods to it, methods that add a node to the linked list, check if a node exists within this linked list and method to see all current nodes.

* Efficiency: Big O Notation

1- `insert(value)` : O(1) "constant"

2- `include(value)` : O(n) "linear"

3- `toString()` : O(n) "linear"

## API

1- `insert(value)`: adds a node with its argument as a value to the beginning of the linked list.

2- `include(value)`: Checks if a value exists in a node in the linked list, if it does it returns true, if not it returns false.

3- `toString()`: Types all the node values inside the linked list as a string with an arrow between them like `{ a } -> { b } -> null`

* Whiteboard: 
![Singly linked list](../../assets/singlyLinkedList.jpg)