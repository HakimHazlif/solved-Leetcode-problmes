class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

var mergeTwoLists = function(list1, list2) {
  let list = new Node(null);
  let current = list
  
  while (list1 && list2) {
    if (list1.value < list2.value) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    } 
    current = current.next
  }
  if (list1) {
    current.next = list1
  } else if (list2) {
    current.next = list2
  }

  return list.next
};

const list1 = new Node(1, new Node(2, new Node(4)))
const list2 = new Node(1, new Node(3, new Node(4, new Node(8, new Node(10)))))

console.log(mergeTwoLists(list1,list2))