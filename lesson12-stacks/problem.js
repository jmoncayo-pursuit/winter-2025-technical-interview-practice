/**
 * Implement a Stack class with the following methods:
 * - push(item): Adds an item to the top of the stack.
 * - pop(): Removes and returns the top item. If the stack is empty, return null.
 * - peek(): Returns the top item without removing it. If the stack is empty, return null.
 * - isEmpty(): Returns true if the stack is empty, false otherwise.
 */
 class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      if(this.end == this.size - 1) {
        const largerArray = new Array(this.size * 2);
        this.size *= 2;
        largerArray.push(...this.items);
        this.items = largerArray;
      }
      this.items[++this.end] = item;
      return this;
    }
  
    pop() {
      if (this.isEmpty()) return null;
      const item = this.items[this.end];
      this.items[this.end] = undefined;
      this.end--;
      return item;
    }
  
    peek() {
      if (this.isEmpty()) return null;
      return this.items[this.items.length - 1];  
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  module.exports = Stack;
  