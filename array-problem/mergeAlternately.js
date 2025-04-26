var mergeAlternately = function(word1, word2) {
  let word = '';

  let i = 0;
  
  while (i < word1.length || i < word2.length) {
    if (word1[i] === undefined) {
      word += word2[i];
      i++;
    } else if (word2[i] === undefined) {
      word += word1[i];
      i++;
    } else {
      word += word1[i];
      word += word2[i];
      i++;
    }
  }

  return word;
};

console.log(mergeAlternately('abcyb', 'qupjsjsjsjs'));