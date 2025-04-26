/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(str1, str2) {
  if (!str1 && str2) return false;

  let i = 0;

  for (let val of str2) {
    if (i === str1.length) return true;

    if (str1[i] === val) {
      i++;
    }
  }

  return i === str1.length ? true : false;
}

console.log(isSubsequence("h", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "acbraadabcra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence("abc", "acbc")); // true
