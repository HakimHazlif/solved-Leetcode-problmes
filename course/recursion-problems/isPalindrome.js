//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(s) {
  if (s.length <= 1) return true;
  if (s.length === 2 && s[0] === s[1]) return true;

  if (s[0] !== s[s.length - 1]) return false;

  return isPalindrome(s.substring(1, s.length - 1));
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
