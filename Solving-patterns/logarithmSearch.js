var search = function(nums, target) {
  const minValue = Math.min(...nums);
  const minIndex = nums.indexOf(minValue);
  const lastValue = nums[nums.length - 1]
  const numsSorted = nums.sort();
  let first = 0, last = nums.length - 1;
  

  while (first < last) {
      const mid = Math.floor((first + last) / 2)
      console.log(1)

      if (numsSorted[mid] === target) {
          if (numsSorted[mid] <= lastValue) {
            return  mid + minIndex;
          } else {
            console.log(lastValue,minIndex, mid)
            return minIndex - mid;
          }
      } else if (numsSorted[mid] > target) {
          last = mid;
      } else if (numsSorted[mid] < target) {
          first = mid;
      } 
  }

  return -1;
};

console.log(search([9,0,1,2,3,4,5,6,7,8],9))

/*
var search = function(nums, target) {
  const minValue = Math.min(...nums);
  const minIndex = nums.indexOf(minValue);
  const numsSorted = [0,1,2,4,5,6,7];
  let first = 3, last = 6;

  while(first < last) {
      const mid = 4

      if (numsSorted[mid] === target) {
          return mid
      } else if (numsSorted[mid] > target) {
          last = mid;
      } else if (numsSorted[mid] < target) {
          first = mid;
      } 
  }

  return -1;
};
*/