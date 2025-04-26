/*
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // add element to top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`)
    this.count++;
    return this.count - 1;
  }

  // remove top element in stack
  // return undefind if stack empty
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1]
    this.count--;
    return deleteItem;
  }

  // check top element
  peek() {
    if (this.count == 0) return 'Stack is empty';
    return this.items[this.count - 1];
  }

  // check if stack is empty 
  isEmpty() {
    return this.count == 0; // that like this.count == 0 ? true : false
  }

  // check size of stack
  size() {
    return this.count;
  }

  // print elements of stack
  print() {
    let str = '';
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + ' '
    }
    return str
  }

  // clear stack
  clear() {
    this.items = [];
    this.count = 0;
    return this.items;
  }
}
*/

class Stack {
  constructor() {
    this.items = [];
  }

  // add element to top of stack
  push(element) {
    this.items.push(element);
    return this.items;
  }

  // remove top element in stack
  // return undefind if stack empty
  pop() {
    if (this.isEmpty()) return undefined;
    
    return this.items.pop();
  }

  // check top element
  peek() {
    if (this.isEmpty()) return 'Stack is empty';
    return this.items[this.items.length - 1];
  }

  // check if stack is empty 
  isEmpty() {
    return this.items.length === 0; // that like this.count == 0 ? true : false
  }

  // check size of stack
  size() {
    return this.items.length;
  }

  // print elements of stack
  print() {
    let str = ''
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' '
    }
    return str
  }

  // clear stack
  clear() {
    this.items = [];
    return this.items;
  }
}

const stack = new Stack()

