var intToRoman = function(num) {
  const romanic = {
    romanOnes: ['I', 'X', 'C', 'M'],
    romanFour: ['IV', 'XL', 'CD'],
    romanFive: ['V', 'L', 'D'],
    romanNine: ['IX', 'XC', 'CM']
  }

  if (num > 5000 || num <= 0) {
    return;
  }

  let i = 0;
  let values = [1,4,5,9];

  let toRoman = '';

  while(num > 0) {
    let carry = num%10;

    carry *= values[0];

    while (carry > 0) {
      if (carry === values[3]) {
        toRoman = romanic.romanNine[i] + toRoman;
        carry -= values[3];
      } else if (carry === values[2]) {
        toRoman = romanic.romanFive[i] + toRoman;
        carry -= values[2];
      } else if (carry === values[1]) {
        toRoman = romanic.romanFour[i] + toRoman;
        carry -= values[1];
      } else {
        toRoman = romanic.romanOnes[i] + toRoman;
        carry -= values[0];
      }
    }

    i++;
    
    for (let j = 0; j < values.length; j++) {
      values[j] *= 10;
    }

    num = Math.floor(num/10);
  }

  return toRoman;
};

const num = 3749;

console.log(intToRoman(num));

/*
var intToRoman = function(num) {
  const romanic = {
    romanOnes: ['I', 'X', 'C', 'M'],
    romanFour: ['IV', 'XL', 'CD'],
    romanFive: ['V', 'L', 'D'],
    romanNine: ['IX', 'XC', 'CM']
  }

  if (num > 5000 || num <= 0) {
    return;
  }

  let i = 1;
  let values = [10,40,50,90];

  let toRoman = 'LVIII';

  while(5 > 0) {
    let carry = 50;

    carry *= values[0];

    while (carry > 0) {
      if (carry === values[3]) {
        toRoman = romanic.romanNine[i] + toRoman;
        carry -= values[3];
      } else if (carry === values[2]) {
        toRoman = romanic.romanFive[i] + toRoman;
        carry -= values[2];
      } else if (carry === values[1]) {
        toRoman = romanic.romanFour[i] + toRoman;
        carry -= values[1];
      } else {
        toRoman = romanic.romanOnes[i] + toRoman;
        carry -= values[0];
      }
    }

    i++;
    
    for (let j = 0; j < values.length; j++) {
      values[j] *= 10;
    }

    num = Math.floor(num/10);
  }

  return toRoman;
};
*/
