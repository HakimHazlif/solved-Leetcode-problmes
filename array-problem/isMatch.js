var isMatch = function(s, p) {
    if (s !== '' && p === '.*') {
      return true;
    } else if (s === '' && p === '.*') {
      return false;
    }

    const sArray = s.split('');
    const pArray = p.split('');

    if (pArray.includes('*')) {
      let r = [];
      for (let i = 0; i < pArray.length - 1; i++) {
        if (sArray[i] !== pArray[i]) {
          return false;
        } else {
          r.push(pArray[i]);
        }
      }

      if (sArray.length % r.length !== 0) {
        return false;
      }

      let i = sArray.length - 1;

      while (i > 0) {
        for(j = r.length - 1; j >= 0; j--) {
          if (sArray[i] !== r[j]) {
            return false;
          }
          i--;
        }
        i--;
      }

      return true;
    } else {
      if (s === p) {
        return true;
      } else {
        return false;
      }
    }
};

const result = isMatch('aaaa', '.*');

console.log(result);

/*
var isMatch = function(s, p) {
  if (s !== '' && p === '.*') {
    return true;
  } else if (s === '' && p === '.*') {
    return false;
  }

  const sArray = [a,a,a];
  const pArray = [a,*];

  if (pArray[pArray.length-1] === '*') {
    let r = [a];
    for (let i = 0; i < pArray.length - 1; i++) {
      if (sArray[i] !== pArray[i]) {
        return false;
      } else {
        r.push(pArray[i]);
      }
    }

    if (sArray.length % r.length !== 0) {
      return false;
    }

    let i = 2;
    let check = 0;

    while (2 > 0) {
      for(j = 0; j >= 0; j--) {
        if (sArray[i] !== r[j]) {
          return false;
        } else {
          check++;
        }
        i--;
      }
      i--;
    }

    if (check === sArray.length) {
      return true;
    } else {
      return false;
    }
  } else {
    if (s === p) {
      return true;
    } else {
      return false;
    }
  }
};
*/