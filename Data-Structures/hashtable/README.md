# Hashtables

Hashtable is a way to store key to a specific value using an array, you can define the index and the key will be assigned to that index using linked list.

## Challenge

Implement a hashtable using linked list and with 4 methods: add,get,contains and hash.

## Approach & Efficiency

* We first hash the key using the accumulation of their character codes, then multiply by a prime number and find the remainder of that hashtable size.

* When we want to add something, we check first if the index is empty, if it is then we create new linked list in it, and then we add to that linked list.

## Efficiency: Big O

- `add`: Time: O(n) because it depends if there is a linked list and the size of that linked list is n.
space: O(n) it depends on how big the array is.

- `hash` Time: O(n) depends on length of the key, n.
Space:: O(1) always will return a number between 0 and the size of the hashtable.

- `get`: Time: O(n) it depends on how big the linked list is, so n.
Space: O(n) depends how many values for that key exist.

- `contains`: Time: O(n) it depends on how big the linked list is, so n.
Space: O(1) always returns a boolean.


## API

- `hash`: converts the key to an array, then converts each character to its ascii code then adds them all together, multiplies by a prime number (i used 599) then finds the remainder of that number divided by it's size.

- `add` after hashing the key, it goes to that index, if its empty creates a linked list, then adds the new value to that linked list.

- `get` hashes the key, then checks if anything exists in that index, if it does then it checks the values inside the linked list that exists there.

- `contains` same as get,except it returns a true if the key exists.