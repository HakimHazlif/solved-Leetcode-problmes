/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

function areThereDuplicates(...args) {
  const argsArray = [...args];
  if (argsArray.length <= 1) return false;

  const storedArgs = argsArray.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") return a - b;

    return String(a).localeCompare(String(b));
  });

  let i = 0;
  for (let j = 1; j < storedArgs.length; j++) {
    if (storedArgs[i] === storedArgs[j]) return true;
    i++;
  }

  return false;
}

console.log(areThereDuplicates(1, 0, 2, 1)); // true
console.log(areThereDuplicates(1, 0, 2, 5)); // false
console.log(areThereDuplicates(1, 1, 4, 3, 5)); // true
console.log(areThereDuplicates(0, 1, 2, 2)); // true
console.log(areThereDuplicates("a", "1", 1, "2")); // false
console.log(areThereDuplicates("a", "1", "1", 2)); // true
console.log(areThereDuplicates("a", "1", 3, 2)); // false
console.log(areThereDuplicates("a", "b", "c", "a")); // true
