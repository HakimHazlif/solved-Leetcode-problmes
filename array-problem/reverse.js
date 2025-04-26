var reverse = function(x) {
    if (x <= Math.pow(-2, 31) || x >= Math.pow(2, 31) -1) {
      return 0;
    }

    let newX = 0;

    if (x < 0) {
      let i = x * -1;

      while (i !== 0) {
        n = i % 10;
        newX = newX * 10 + n;
        i = Math.floor(i/10);
      }

      newX = newX * -1;
    } else {
      while (x !== 0) {
        n = x % 10;
        newX = newX * 10 + n;
        x = Math.floor(x/10);
      }
    }

    if (newX <= Math.pow(-2, 31) || newX >= Math.pow(2, 31) -1) {
      return 0;
    }

    return newX;
};


x = 78534236469;
console.log(reverse(x));