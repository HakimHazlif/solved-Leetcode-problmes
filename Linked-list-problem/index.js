class Head {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

var hasCycle = function(head) {
  let index = 0;
  while (head.next) {
      head = head.next;
      index++; 
  }

  if (index === 0) return false;
  else return true;
}; 

const head = new Head(1)
const result = hasCycle(head)
console.log(result)

