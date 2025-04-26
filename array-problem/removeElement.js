var removeElement = function(nums, val) {
    let newArray = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        newArray.push(nums[i]);
      }
    }

    return newArray;
};

const nums = [3,2,2,3];

const result = removeElement(nums, 4);

console.log(result);