class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}



const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));


var removeNthFromEnd = function(head, n) {
    let current = head;
    let length = 0;

    while (current) {
      length++
      current = current.next;
    }

    if (n > length || n <= 0) {
      return;
    } else {
      length -= n;
    } 
    
    let dummy = head;
    let previous;
    let count = 0;

    if (length === 0) {
      head = dummy.next;
    } else {
      while (count < length) {
        count++;
        previous = dummy;
        dummy = dummy.next;
      }

      previous.next = dummy.next;
    }
  
    return head; 
};



const result = removeNthFromEnd(list, 2);

//console.log(result);


let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}

