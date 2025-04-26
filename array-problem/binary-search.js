function search(arr,target) {
  if (arr.length === 0) return -1;
  
  let first = 0;
  let last = arr.length-1;

  while (first < last) {
      const mid = Math.floor((first + last) / 2); 
      if (target === arr[mid]) {
          return mid;
      } else if (target < arr[mid]) {
          last = mid+1;
      } else {
          first = mid-1;
      }
  }

  return -1;
}

console.log(search([1,4,6,8,9,11,12,13,24,50,51,58,60,70],12))

