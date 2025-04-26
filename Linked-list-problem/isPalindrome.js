class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}



const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))))));


var isPalindrome = function(head) {
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

  while (head) {
    if (head.val !== newHead.val) {
      return false;
    }

    head = head.next;
    newHead = newHead.next;
  }

  return true;
};




const result = isPalindrome(list);

console.log(result);

/*
let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
*/