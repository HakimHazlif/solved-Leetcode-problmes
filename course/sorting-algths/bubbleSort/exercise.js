// ATTEMPT THIS IS YOU ARE UP FOR IT! Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array. The function takes 2 parameters: an array and an optional comparator function.

// The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

// Bubble sort is an O(n^2) algorithm. You can read more about it here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms

function bubbleSort(arr, comparator = null) {
  if (arr.length <= 1) return arr;

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let noSwap;

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (
        (typeof comparator === "function" &&
          comparator(arr[j], arr[j + 1]) > 0) ||
        arr[j] > arr[j + 1]
      ) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }

    if (noSwap) break;
  }

  return arr;
}
