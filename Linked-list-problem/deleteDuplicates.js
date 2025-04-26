class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}


const list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4))))));


var deleteDuplicates = function(head) {
  const current = head;
  //let nextest = current.next;

  while (head && head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return current;
};


//////////
const result = deleteDuplicates(list);

let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}