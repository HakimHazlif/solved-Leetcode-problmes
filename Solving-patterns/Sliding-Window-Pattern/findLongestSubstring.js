/* 
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

function findLongestSubstring(arr) {
  const charsMap = new Map();
  let longestSubarr = 0;
  let i = 0;

  while (i < arr.length) {
    if (charsMap.has(arr[i])) {
      i = charsMap.get(arr[i]);
      charsMap.clear();
    } else {
      charsMap.set(arr[i], i);
    }

    longestSubarr = Math.max(charsMap.size, longestSubarr);
    i++;
  }

  return longestSubarr;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
