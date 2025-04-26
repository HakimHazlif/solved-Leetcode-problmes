class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}


const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));


var middleNode = function(head) {
  let current = head;
  let dummy = current;

  let length = 0;

  while (dummy) {
    length++
    dummy = dummy.next;
  }

  let middleNode = Math.floor(length/2);

  while (middleNode > 0) {
    current = current.next;
    middleNode--;
  }

  return current;
};


const result = middleNode(list);

let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}