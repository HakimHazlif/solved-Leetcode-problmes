// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
  if (num === 1) return num;

  return num + recursiveRange(num - 1);
}
