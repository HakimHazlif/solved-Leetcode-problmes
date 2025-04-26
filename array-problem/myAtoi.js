var myAtoi = function(s) {
  const sArray = s.split('');
  let numString = '';

  const digits = ['0','1','2','3','4','5','6','7','8','9','-','+','.'];

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === ' ' && numString === '') {
      continue;
    } else if (sArray[i] === '-' && numString !== '' || sArray[i] === '+' && numString !== '') {
      i = sArray.length;
    } else if (i === sArray.length - 1 && sArray[i] === '.') {
      continue;
    } else if (digits.includes(sArray[i])) {
      numString += sArray[i];
    } else {
      i = sArray.length;
    }
  };

  if (numString === '' || numString === '-' || numString === '+') {
    return 0;
  }

  const num = Number(numString);

  if (num < -(2**31)) {
    return -(2**31);
  } else if (num > (2**31)-1) {
    return (2**31)-1;
  }

  return num;
};

s = "+-1";

console.log(myAtoi(s));