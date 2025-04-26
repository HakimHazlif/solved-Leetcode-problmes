/* 
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.
*/

function findRotatedIndex(arr, num) {
  const lastIndex = findLast(arr);
  if (arr[lastIndex] === num) return lastIndex;
  else if (arr[0] <= num) {
    return findIndex(arr.slice(0, lastIndex + 1), num);
  } else {
    const index = findIndex(arr.slice(lastIndex + 1, arr.length), num);
    if (index === -1) return -1;
    else return index + lastIndex + 1;
  }
}

function findLast(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    const mid = Math.floor((high + low) / 2);
    if (mid === arr.length - 1 || arr[mid] > arr[mid + 1]) return mid;
    else if (arr[mid] < arr[mid + 1] && arr[0] > arr[mid])
      return findLast(arr, low, high - 1);
    else return findLast(arr, low + 1, high);
  }
  return -1;
}

function findIndex(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);

    if (num > arr[mid]) start = mid + 1;
    else if (num < arr[mid]) end = mid - 1;
    else return mid;
  }

  return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
