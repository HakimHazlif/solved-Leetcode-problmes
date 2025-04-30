// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(words) {
  if (words.length === 1) return [words[0].toUpperCase()];

  res = capitalizeWords(words.slice(0, -1));
  res.push(words.slice(words.length - 1)[0].toUpperCase());
  return res;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
