function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let maxSum = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    const subarraySum = arr
      .slice(i, i + num)
      .reduce((cur, sum) => cur + sum, 0);
    maxSum = Math.max(maxSum, subarraySum);
  }

  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
