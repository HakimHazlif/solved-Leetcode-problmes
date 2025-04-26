var romanToInt = function(s) {
  const romanic = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }

  console.log(romanic['CM']);

  let i = 0;
  let number = 0;

  while (i < s.length) {
    if (romanic.hasOwnProperty(s.substring(i, i+2))) {
      number += romanic[s.substring(i, i+2)];
      i += 2;
    } else if (romanic.hasOwnProperty(s.substring(i, i+1))) {
      number += romanic[s.substring(i, i+1)];
      i += 1;
    }
  }

  return number;
};


const s = "LVIII";

console.log(romanToInt(s));

/*
var romanToInt = function(s) {
  const romanicNumber = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }

  const keys = Object.keys(romanicNumber);
  const romanicArray = s.split('');

  let i = 0;
  let number = 0;

  while (i < romanicArray.length) {
    if (i+2 < romanicArray.length) {
      if (keys.includes(romanicArray.slice(i, i+2))) {
        number += romanicNumber.romanicArray.slice(i, i+2);
        i += 2;
      }
    } else if (i+1 < romanicArray.length) {
      if (keys.includes(romanicArray.slice(i, i+1))) {
        number += romanicNumber.romanicArray.slice(i, i+1);
        i++;
      }
    }
  }

  return number;
};
*/
