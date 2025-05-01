// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    const mid = Math.floor((i + j) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) i = mid + 1;
    else j = mid - 1;
  }

  return -1;
}

const sol = binarySearch(
  [
    1, 4, 6, 7, 11, 12, 13, 16, 17, 19, 24, 26, 28, 29, 31, 32, 35, 36, 37, 40,
    46, 48, 49, 51, 53, 54, 59, 60,
  ],
  53
);

console.log(sol);
