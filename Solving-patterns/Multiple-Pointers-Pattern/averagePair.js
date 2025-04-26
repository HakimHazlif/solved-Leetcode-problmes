/*
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/

function averagePair(arr, average) {
  if (!arr.length) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const averagePair = (arr[left] + arr[right]) / 2;
    console.log([arr[left], arr[right]]);
    console.log(averagePair);

    if (average === averagePair) return true;
    else if (average > averagePair) left++;
    else right--;
  }

  return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 11, 13, 19], 7.5)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false
