class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}


const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));


var deleteMiddle = function(head) {
  let current = head;
  let dummy = current;

  let length = 0;

  while (dummy) {
    length++
    dummy = dummy.next;
  }

  if (length <= 1) {
    return head = null;
  }

  let middleNode = Math.floor(length/2);

  let newHead = new ListNode();
  let aft = newHead;

  while (middleNode > 0) {
    aft.next = current;
    aft = aft.next

    current = current.next;

    
    middleNode--;
  }

  aft.next = null;
  newHead = newHead.next;


  aft = newHead;

  while (aft.next) {
    aft = aft.next;
  }

  aft.next = current.next;

  return newHead;
};


const result = deleteMiddle(list);

let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}


/*
var deleteMiddle = function(head) {
  let current = head;
  let dummy = current;

  let length = 0;

  while (dummy) {
    length++
    dummy = dummy.next;
  }

  if (length <= 1) {
    return;
  }

  let middleNode = Math.floor(length/2);

  let neaHead;
  let cur;

  while (middleNode > 0) {
    const node = new ListNode(current.val)

    if (!neaHead) {
      neaHead = node; 
    } else {
      cur = neaHead;

      while (cur.next) {
        cur = cur.next;
      }

      cur.next = node;
    }
    
    current = current.next;
    middleNode--;
  }

  let aft = neaHead;

  while (aft.next) {
    aft = aft.next;
  }

  aft.next = current.next;

  return neaHead;
};
*/