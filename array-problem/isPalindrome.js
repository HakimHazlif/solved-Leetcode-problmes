var isPalindrome = function(x) {
  let xClone = x
  let newX = 0;

  while (xClone > 0) {
    const n = xClone%10;
    newX = (newX*10)+n;
    xClone = Math.floor(xClone/10);
  }

  if (x === newX) {
    return true
  }

  return false;
};