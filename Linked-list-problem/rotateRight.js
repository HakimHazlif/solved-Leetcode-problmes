class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}


const list = new ListNode(0, new ListNode(1, new ListNode(2)));


var rotateRight = function(head, k) {
  
  if (k === 0 || !head.next) {
    return head;
  }

  let current = head;
  
  while (k > 0) {
    let fummy = current;
    let lastNode;
    let previous;
    let length = 0;

    while (current) {
      lastNode = current;
      current = current.next;
      length++
    }

    while (length - 1 > 0) {
      const node = new ListNode(fummy.val);

      if (!previous) {
        previous = node; 
      } else {
        current = previous;
        while (current.next) {
          current = current.next;
        }

        current.next = node;
      }

      fummy = fummy.next;
      length--
    };

    current = lastNode;
    current.next = previous;

    k--;
  }

  return current;
}

const result = rotateRight(list, 4);

//console.log(result);


let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}

