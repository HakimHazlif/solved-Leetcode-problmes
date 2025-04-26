function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = arr.slice(0, num).reduce((cur, sum) => cur + sum, 0);
  let tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
