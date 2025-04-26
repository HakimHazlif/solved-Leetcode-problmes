/*
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
*/

function countZeroes(arr) {
  let first = 0;
  let last = arr.length - 1;
  let counter = 0;

  while (first <= last) {
    const mid = Math.floor((last + first) / 2);

    if (arr[mid] === 0) {
      counter += last - mid + 1;
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return counter;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
