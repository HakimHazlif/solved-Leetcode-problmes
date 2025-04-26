class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}



const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))))));


var reverseList = function(head) {
  if (head === null) {
    return head;
  }

  let current = head;
  let newHead;

  while (current) {
    if (newHead) {
      newHead = new ListNode(current.val, newHead);
    } else {
      newHead = new ListNode(current.val);
    }

    current = current.next;
  }
  
  return newHead;
};

/*
var reverseList = function(head) {
  let current = head;
  let newHead;

  while (current) {
    newHead = new ListNode(current.val, current);

    current = current.next;
  }
  
  return head;
};
*/

const result = reverseList(list);

let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}