class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const l1 = new Node(1, new Node(2, new Node(4)));
const l2 = new Node(2, new Node(3, new Node(4)));


var mergeTwoLists = function(list1, list2) {
  let list = new Node();
  const current = new Node();
  
  while (list1 && list2) {
    if (list1.data < list2.data) {
      list.next = list1;

      list1 = list1.next;
    } else {
      list.next = list2;

      list2 = list2.next;
    }

    list = list.next;
  }

  if (list1) {
    list.next = list1;
  }

  if (list2) {
    list.next = list2;
  }

  return current.next;
};


/*
var mergeTwoLists = function(list1, list2) {
  let list = new Node();
  const current = list;
  
  while (list1 && list2) {
    if (list1.data < list1.data) {
      list.next = list1;

      list1 = list1.next;
    } else {
      list.next = list2;

      list2 = list2.next;
    }

    list = list.next;
  }

  if (list1) {
    list.next = list1;
  }

  if (list2) {
    list.next = list2;
  }

  return current.next;
};

*/

const result = mergeTwoLists(l1, l2);

let current = result;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}