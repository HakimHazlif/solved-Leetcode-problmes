function search(arr, num) {
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

console.log(search([1, 2, 5, 6, 8, 12, 16, 17, 18, 21, 26], 26));
