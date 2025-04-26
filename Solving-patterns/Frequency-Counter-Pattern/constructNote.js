/* Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)
*/

function constructNote(letters, message) {
  const frequency = {};

  for (let val of message) {
    frequency[val] = (frequency[val] || 0) + 1;
  }

  for (let val of letters) {
    if (!frequency[val]) return false;

    if (frequency[val] >= 0) {
      frequency[val]--;
    }

    if (frequency[val] < 0) return false;
  }

  return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
