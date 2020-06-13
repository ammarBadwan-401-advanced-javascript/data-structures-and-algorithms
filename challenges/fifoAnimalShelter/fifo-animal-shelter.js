'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter{
  constructor(){
    this.front = null;
  }

  enqueue(animal){
    if(animal === 'dog' || animal === 'cat'){
      let newAnimal = new Node(animal);
      if(!this.front){
        this.front = newAnimal;
        this.rear = newAnimal;
        return this;
      }
      this.rear.next = newAnimal;
      this.rear = newAnimal;
      return this;
    } else {
      return 'Only dogs and cats are allowed.';
    }
  }

  dequeue(pref){
    if(pref === 'dog' || pref === 'cat'){

      if (!this.front){
        return 'Empty Queue';
      }
      
      if(pref === 'cat' && this.front.value !== 'cat'){
        return 'First animal out is not a cat';
      } else if (pref === 'dog' && this.front.value !== 'dog'){
        return 'First animal out is not a dog';
      }


      if (!this.front.next){
        let value = this.front.value;
        this.front = null;
        this.rear = null;
        return value;
      }
      let value = this.front.value;
      this.front = this.front.next;
      return value;

    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;