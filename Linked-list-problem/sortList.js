class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}


const list = new ListNode();


var sortList = function(head) {
  let current = head;

  while (current && current.next) {

    if (current.val <= current.next.val) {
      current = current.next;
    } else if (current.val > current.next.val) {
      valuePrev = current.val;
      valueNext = current.next.val;

      current.val = valueNext;
      current.next.val = valuePrev;

      current = head;
    }
  }

  return head;
};

const result = sortList(list);

//console.log(result);


let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}



/*
const list = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(9)))));


var sortList = function(head) {
  const current = new ListNode(6, new ListNode(9));

  while (current) {
    if (current.val <= current.next.val) {
      current = current.next;
    } else if (current.val > current.next.val) {
      valuePrev = 9;
      valueNext = 6;

      current.val = valueNext;
      current.next.val = valuePrev;

      current = head;
    }
  }
};

*/