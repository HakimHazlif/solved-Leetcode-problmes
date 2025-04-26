var longestCommonPrefix = function(strs) {
  let i = 0;
  let commonPrefix = '';
  
  while (i < strs[0].length){
    let count = 0;
    let j = 1;

    while (j < strs.length){
      if (strs[0].substring(i,i+1) === strs[j].substring(i,i+1)){
        count++;
      } else {
        j = strs.length;
        i = strs[0].length;
      }
      j++;
    }

    if (count === strs.length-1){
      commonPrefix += strs[0].substring(i,i+1);
    }

    i++;
  }

  return commonPrefix;
};

const arr = ["flower","flow","flight"];
const result = longestCommonPrefix(arr);
console.log(result);