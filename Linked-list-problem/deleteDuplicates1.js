class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}


const list = new ListNode(1, new ListNode(1, new ListNode(6, new ListNode(2, new ListNode(5, new ListNode(5))))));


var deleteDuplicates = function(head) {
  let current = head;
  const newHead = new ListNode();
  let curr = newHead;
  let length = 0;

  while (current) {
    length++
    current = current.next;
  }

  current = head;

  while (length > 0) {
    let fummy = current;
    let len = length;
    let count = 0;
    let v = fummy.val;

    while (len > 0) {
      if (v === fummy.val) {
        count++;
      }

      fummy = fummy.next;
      len--;
    }

    if (count === 1) {
      curr.next = new ListNode(v);
      curr = curr.next;
      current = current.next;
      length--;
      count = 0;
    } else {
      while (count > 0) {
        current = current.next;
        count--;
        length--;
      }
    }
  }
  return newHead.next;
};



//////////
const result = deleteDuplicates(list);

//console.log(result);


let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
  


/*

*/


