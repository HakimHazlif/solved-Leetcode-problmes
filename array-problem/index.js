var longestPalindrome = function(s) {
  const sArray = s.split('');

  let newS = sArray[0];

  for (let i = 0; i < s.length; i++) {
    let j = 1;
    while (i-j >= 0 && i+j < s.length) {
      if (sArray[i-j] === sArray[i+j]) {
        newS = s.substring(i-j, i+j+1);
        j++;
      } else {
        if (sArray[i] === sArray[i+j]) {
          newS = s.substring(i, i+2);
      
          while (i-j >= 0 && i+j+1 < s.length) {
            if (sArray[i-j] === sArray[i+j+1]) { 
              newS = s.substring(i-j, i+j+2);
              j++;
            } else {
              j = s.length;
            } 
          }
        }
      }
    }
  } 
  return newS;
};


const s = "tattarrattat"

console.log(longestPalindrome(s));

var longestPalindrome = function(s) {
  const sArray = ['a','f','g','g','g','f','m'];

  let newS = 'a';

  for (let i = 1; i < s.length; i++) {
    let j = 7;
    while (i-j >= 0 && i+j < s.length) {
      if (sArray[i-j] === sArray[i+j]) {
        newS = s.substring(i-j, i+j+1);
        j++;
      } else {
        if (sArray[i] === sArray[i+j]) {
          newS = s.substring(i, i+2);
          
          while (i-j >= 0 && i+j+1 < s.length) {
            if (sArray[i-j] === sArray[i+j+1]) { 
              newS = s.substring(i-j, i+j+2);
              j++;
            } else {
              j = s.length;
            } 
          }
        } else {
          j = s.length;
        }
      }
    }
  } 
  return newS;
};









































/*
var longestPalindrome = function(s) {
  const sArray = ['a','a','a','b','a','a','a','a'];

  let newS = 'aaa';

  let i = 2, j = 4;

  while (j < 8) {
    if (sArray[i] === sArray[j]) {
      if (newS.length < s.substring(i,j+1).length) {
        newS = s.substring(i,j+1);
      }

      let k = 1;

      while (3 < s.length) {
        if (sArray[i] === sArray[j+k]) {
          if (newS.length < s.substring(i,j+k+1).length) {
            newS = s.substring(i,j+k+1);
          }
          j++;
        } else {
          k = s.length;
        }
      }

      k = 1;

      while (i-k >= 0 && j+k < s.length) {
        if (sArray[i-k] === sArray[j+k]) {
          if (newS.length < s.substring(i-k, j+k+1).length) {
            newS = s.substring(i-k, j+k+1);
          }
          k++;
        } else {
          k = s.length;
        }
      }

      i++;
      j++;
    } else {
      if (i !== 0) {
        let k = 2;
        while (i-k >= 0 && i+k < s.length) {
          if (sArray[i-k] === sArray[i+k]) {
            if (newS.length < s.substring(i-k, i+k+1).length) {
              newS = s.substring(i-k, i+k+1);
            }
            k++;
          } else {
            k = s.length;
          }
        }
      }

      i++;
      j++;
    }
  }
}
*/