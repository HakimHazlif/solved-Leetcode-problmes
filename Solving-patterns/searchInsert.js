var searchInsert = function (nums, target) {
  let first = 0;
  let last = nums.length - 1;

  while (first < last) {
    const mid = Math.floor((first + last) / 2);

    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) first = mid + 1;
    else last = mid - 1;
  }

  return first + 1;
};

[1, 3, 4, 5, 7, 8, 10, 12, 15, 20, 22, 23, 24, 26, 28, 29, 31, 32];

// var searchInsert = function (nums, target = 14) {
//   let first = 0; // 7
//   let last = nums.length - 1; // 8

//   while (first < last) {
//     // 0 < 17
//     const mid = Math.floor((first + last) / 2); // 7

//     if (target === nums[mid]) return mid;
//     else if (target > nums[mid]) first = mid;
//     else last = mid - 1;
//   }

//   return first + 1;
// };
