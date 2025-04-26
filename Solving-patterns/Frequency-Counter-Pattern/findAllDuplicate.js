// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

function findAllDuplicates(arr) {
  if (!arr.length) return [];

  const duplicates = [];
  const set = new Set();

  for (let val of arr) {
    set.has(val) ? duplicates.push(val) : set.add(val);
  }

  return duplicates;
}

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]); // [2, 3]
findAllDuplicates([4, 3, 2, 1, 0]); // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]); // [3,2,1]
