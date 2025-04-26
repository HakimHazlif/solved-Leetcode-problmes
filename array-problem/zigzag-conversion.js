var convert = function (s, numRows) {
  if (numRows <= 1) return s;

  const matrix = Array.from({ length: numRows }, () => []);

  let indexOfString = 0;
  let colNum = 0;
  let zigzag = numRows - 1;

  while (indexOfString < s.length) {
    if (zigzag === 0) zigzag = numRows - 1;

    if (zigzag === numRows - 1) {
      for (let i = 0; i < numRows; i++) {
        matrix[i][colNum] = s[indexOfString];
        indexOfString++;
      }
      zigzag--;
    } else {
      for (let i = 0; i < numRows; i++) {
        matrix[i][colNum] = "";
      }
      matrix[zigzag][colNum] = s[indexOfString];
      indexOfString++;
      zigzag--;
    }

    colNum++;
  }

  return matrix.map((arr) => arr.join("")).join("");
};

convert("SGAJUIADSDKSJDHADNAKDJ", 4);

// var convert = function (s, numRows) {
//   if (numRows <= 1) return s;

//   const matrix = [
//     ["S", ""],
//     ["G", "J"],
//     ["A", ""],
//   ];

//   let indexOfString = 4;
//   let colNum = 1;
//   let zigzag = 0;

//   while (3 < 22) {
//     if (zigzag === 0) zigzag = 2;

//     if (zigzag === 2) {
//       for (let i = 0; i < 3; i++) {
//         matrix[i][colNum] = s[indexOfString];
//         indexOfString++;
//       }
//       zigzag--;
//     } else {
//       for (let i = 0; i < 3; i++) {
//         matrix[i][colNum] = "";
//       }
//       matrix[zigzag][colNum] = s[indexOfString];
//       indexOfString++;
//       zigzag--;
//     }

//     colNum++;
//   }

//   console.log(matrix);
// };
