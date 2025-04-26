class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  
  
  // insert at first
  insertFirst(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  // insert at last
  insertLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // insert at
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    if (index === this.size) {
      this.insertLast(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;

    this.size++;
  }

  // get at
  getAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.data;
  }

  // remove at
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    let current = this.head;

    if (index === 0) {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (index === this.size - 1) {
      current = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let count = 0;

      while (count < index) {
        current = current.next;
        count++;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.size--;
  }

  // print 
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}


const list = new DoublyLinkedList();

list.insertLast(2); //2
list.insertFirst(3); //1
list.insertLast(4); //3

list.printListData();