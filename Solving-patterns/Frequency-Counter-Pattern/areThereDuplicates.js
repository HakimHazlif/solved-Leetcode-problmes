/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

function areThereDuplicates(...args) {
  const argsArray = [...args];
  return new Set(argsArray).size !== argsArray.length;
}

console.log(areThereDuplicates(1, 0, 2, 1)); // true
console.log(areThereDuplicates(1, 0, 2, 5)); // false
console.log(areThereDuplicates(1, 1, 4, 3, 5)); // true
console.log(areThereDuplicates(0, 1, 2, 2)); // true
console.log(areThereDuplicates("a", "1", 1, "2")); // false
console.log(areThereDuplicates("a", "1", "1", 2)); // true
console.log(areThereDuplicates("a", "1", 3, 2)); // false
console.log(areThereDuplicates("a", "b", "c", "a")); // true
