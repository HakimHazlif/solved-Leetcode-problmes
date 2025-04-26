/* 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  const numStr1 = String(num1);
  const numStr2 = String(num2);
  if (numStr1.length !== numStr2.length) return false;

  const frequency1 = {};
  const frequency2 = {};

  for (let val of numStr1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }
  for (let val of numStr2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!(key in frequency2)) return false;

    if (frequency1[key] !== frequency2[key]) return false;
  }

  return true;
}
