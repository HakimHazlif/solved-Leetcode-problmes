var findMedianSortedArrays = function(nums1, nums2) {
  const newNums = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length || j < nums2.length) {
    if (j === nums2.length && i < nums1.length) {
      newNums.push(nums1[i]);
      i++;
    } else if (j < nums2.length && i === nums1.length) {
      newNums.push(nums2[j]);
      j++
    } else {
      if (nums1[i] < nums2[j]) {
        newNums.push(nums1[i]);
        i++;
      } else if (nums1[i] > nums2[j]) {
        newNums.push(nums2[j]);
        j++
      } else {
        newNums.push(nums1[i]);
        newNums.push(nums2[j]);
        i++;
        j++;
      }
    } 
  }

  const midPoint = Math.floor(newNums.length / 2);

  if (newNums.length%2 === 0) {
    const sum = (newNums[midPoint-1] + newNums[midPoint])/2;

    return sum;
  } else {
    return newNums[midPoint];
  }
};

const nums1 = [1,3];
const nums2 = [2];

const result = findMedianSortedArrays(nums1, nums2);

console.log(result);