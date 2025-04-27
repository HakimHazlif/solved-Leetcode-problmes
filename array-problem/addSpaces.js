var addSpaces = function (s, spaces) {
  let newS = "";
  let prevIndex = 0;

  for (let i = 0; i < spaces.length; i++) {
    newS += `${s.slice(prevIndex, spaces[i])} `;
    prevIndex = spaces[i];
  }

  newS += s.slice(prevIndex, s.length);

  return newS;
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));
