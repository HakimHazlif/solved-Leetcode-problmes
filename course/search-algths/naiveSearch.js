function naiveSearch(longStr, shortStr) {
  let i = 0;
  let j = 0;

  while (i < longStr.length) {
    if (longStr[i] === shortStr[j] && j !== shortStr.length - 1) {
      i++;
      j++;
    } else if (longStr[i] === shortStr[j] && j === shortStr.length - 1) {
      return `indexes range: ${i - j} - ${i}`;
    } else {
      i = i - j;
      j = 0;
      i++;
    }
  }

  return -1;
}

const sol = naiveSearch("owlkswlfkwjfssjfskljsf", "lkswl");
console.log(sol);
