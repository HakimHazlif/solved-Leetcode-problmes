class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/*
const n1 = new Node(100);
console.log(n1);
*/

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if the head is empty = false = null
    if (!this.head) {
      this.head = node; 
    // if the head is not empty = true = not null
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    
    this.size++;
  }

  //insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data)
      } 
      count++;
      current = current.next;
    }

    return null;
  }

  //remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }


  //print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

}



// Create linked lists
const list1 = new LinkedList();
const list2 = new LinkedList();

// Add elements to list1
list1.insertLast(2);
list1.insertLast(4);
list1.insertLast(3);

// Add elements to list2
list2.insertLast(5);
list2.insertLast(6);
list2.insertLast(4);


/*
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const l1 = new Node(2, new Node(3, new Node(4)));
const l2 = new Node(5, new Node(7, new Node(2)));

var addTwoNumbers = function(l1, l2) {
  const list = new Node();
  let p = list;
  let carry = 0;

  while(l1 !== null || l2 !== null) {
    sum = carry;

    if (l1 !== null) {
      sum += l1.data;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.data;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    p.next = new Node(sum % 10);

    p = p.next;
  }

  if (carry > 0) {
    p.next = new Node(carry);
  }

  return list.next;
}


// استدعاء الدالة وتخزين القائمة الناتجة
const result = addTwoNumbers(l1, l2);

// طباعة القائمة الناتجة
let current = result;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

*/


// Function to add two numbers represented as linked lists
function addTwoNumbers(l1, l2) {
  const resultList = new LinkedList();
  let carry = 0;
  let p1 = l1.head;
  let p2 = l2.head;

  while (p1 !== null || p2 !== null) {
    let sum = carry;

    if (p1 !== null) {
      sum += p1.data;
      p1 = p1.next;
    }

    if (p2 !== null) {
      sum += p2.data;
      p2 = p2.next;
    }

    carry = Math.floor(sum / 10);
    resultList.insertLast(sum % 10);
  }

  if (carry > 0) {
    resultList.insertLast(carry);
  }

  return resultList;
}

// Add two numbers represented as linked lists
const result = addTwoNumbers(list1, list2);
result.printListData();
