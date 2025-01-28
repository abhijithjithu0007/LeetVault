var duplicateZeros = function (arr) {
  let dup = [...arr].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      i++;
    }
  }
  arr.splice(dup);
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
