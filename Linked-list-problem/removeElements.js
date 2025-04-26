class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}



const list1 = new ListNode(2, new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7))))))));

const val = 7;


var removeElements = function(head, val) {
  let current = head;
  let previous = current;
  let count = 0;

  while(current) {
    if (count === 0 && current.val === val) {
      head = current.next;
    } else if (current.val !== val) {
      previous = current;
      count++;
    } else if (current.val === val) {
      previous.next = current.next;
      count++;
    }
    
    current = current.next;
    
  }

  return head;
};




const result = removeElements(list1, val);

let current1 = result;
while (current1 !== null) {
  console.log(current1.val);
  current1 = current1.next;
}
  


