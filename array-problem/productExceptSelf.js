var productExceptSelf = function(nums) {
  let newNums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue
      } else {
        num *= nums[j];
      }
    }

    newNums.push(num);
    num = 1;
  }

  return newNums;
};

console.log(productExceptSelf([-1,1,0,-3,3]));