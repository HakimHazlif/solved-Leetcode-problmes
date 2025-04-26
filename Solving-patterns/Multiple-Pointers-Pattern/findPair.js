/*
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.
*/

// console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
// [4, 1, 2, 8]

function findPair(arr, n) {
  // O(n) space + O(n) time
  const s = new Set(arr.map((num) => Math.abs(num - n)));
  if (n === 0 && s.size === arr.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (s.has(arr[i])) return true;
  }
  return false;

  /* // O(1) space + O(n log n) time
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
      return true
    } else if (arr[j] - arr[i] < num) {
      j++
    } else {
      i++
    }
  }
  return false;
  */
}

// console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
// console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
// console.log(findPair([5, 5], 0)); // true
// console.log(findPair([-4, 4], -8)); // true
// console.log(findPair([-4, 4], 8)); // true
// console.log(findPair([1, 3, 4, 6], -2)); // true
// console.log(findPair([0, 1, 3, 4, 6], -2)); // true
