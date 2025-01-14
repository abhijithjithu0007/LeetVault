var nextGreatestLetter = function (letters, target) {
  letters.push(target);
  let a = new Set(letters.sort());
  let arr = [...a];
  let ind = arr.indexOf(target);
  if (ind + 1 == arr.length) return letters[0];
  return arr[ind + 1];
};

console.log(nextGreatestLetter(["c", "f", "j"], "c"));
