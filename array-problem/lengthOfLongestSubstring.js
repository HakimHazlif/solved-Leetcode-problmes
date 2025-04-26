var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = i+1;
  let substrings = [];
  let newS = [];

  const arr = s.split('');

  if (arr.length === 1) {
    return 1;
  }

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      if (j === arr.length - 1) {
        substrings.push([s[i]]);
        substrings.push([s[j]]);
        i++;
        j++;
      } else {
        substrings.push([s[i]]);
        i++;
        j++;
      }
    } else if (arr[i] !== arr[j] && newS.length === 0) {
      newS.push(arr[i]);
      newS.push(arr[j]);

      i++;
      j++;

      if (newS.length === arr.length) {
        substrings.push(newS);
      }

      for (let k= 0; k < newS.length; k++) {
        if (j === arr.length) {
          substrings.push(newS);
          newS = [];
        } else {
          if (newS[k] === arr[j]) {
            substrings.push(newS);
            newS = [];
          }
        }
      }
    } else if (arr[i] !== arr[j] && newS.length > 0) {
      newS.push(arr[j]);

      i++;
      j++;

      if (newS.length === arr.length) {
        substrings.push(newS);
      }
      
      for (let k= 0; k < newS.length; k++) {
        if (j === arr.length) {
          substrings.push(newS);
          newS = [];
        } else {
          if (newS[k] === arr[j]) {
            substrings.push(newS);
            newS = [];
          }
        }
      }
    }
  }


  let subLength = 0;
  let k = 0;

  for (let i = 1; i < substrings.length; i++) {
    if (substrings[k].length >= substrings[i].length) {
      subLength = substrings[k].length;
    } else {
      subLength = substrings[i].length;
      k = i;
    }
  }

  return subLength;
}


const s = 'abcabcbb';

console.log(lengthOfLongestSubstring(s));

/*
var lengthOfLongestSubstring = function (s) {
  let i = 3;
  let j = 4;
  let substrings = [[p,w],[w],];
  let newS = [w,k,e];

  const arr = [p,w,w,k,e,w];

  if (arr.length === 1) {
    return 1;
  }

  while (4 < 6) {
    if (arr[i] === arr[j]) {
      if (j === arr.length - 1) {
        substrings.push([s[i]]);
        substrings.push([s[j]]);
        i++;
        j++;
      } else {
        substrings.push([s[i]]);
        i++;
        j++;
      }
    } else if (arr[i] !== arr[j] && newS.length === 0) {
      newS.push(arr[i]);
      newS.push(arr[j]);

      i++;
      j++;

      if (newS.length === arr.length) {
        substrings.push(newS);
      }

      for (let k= 0; k < newS.length; k++) {
        if (j === arr.length) {
          substrings.push(newS);
          newS = [];
        } else {
          if (newS[k] === arr[j]) {
            substrings.push(newS);
            newS = [];
          }
        }
      }
    } else if (arr[i] !== arr[j] && newS.length > 0) {
      newS.push(arr[j]);

      i++;
      j++;

      if (newS.length === arr.length) {
        substrings.push(newS);
      }
      
      for (let k= 0; k < newS.length; k++) {
        if (j === arr.length) {
          substrings.push(newS);
          newS = [];
        } else {
          if (newS[k] === arr[j]) {
            substrings.push(newS);
            newS = [];
          }
        }
      }
    }
  }

  [ [ 'p', 'w' ], [ 'w' ], [ 'w', 'k', 'e' ], [ 'e', 'w' ] ]
  let subLength = 2;

  for (let i = 1; i < 4; i++) {
    if (1 >= 3) {
      subLength = substrings[i].length;
    } else {
      subLength = substrings[i+1].length;
    }
  }

  return subLength;
}
  */