class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

const list1 = new ListNode(9, new ListNode(9,new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));

const list2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));


var addTwoNumbers = function(l1, l2) {
  const newList = new ListNode();
  let current = newList;
  //let list1 = l1;
  //let list2 = l2;
  let carry = 0;

  while (l1 || l2) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(sum%10);
    carry = Math.floor(sum/10);

    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return newList.next;
};


const result = addTwoNumbers(list1, list2);

//console.log(result);


let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}