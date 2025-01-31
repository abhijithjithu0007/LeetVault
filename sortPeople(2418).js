var sortPeople = function (names, heights) {
  let copy = [...heights];

  let srt = heights.sort((a, b) => b - a);
  let arr = [];
  let i = 0;
  while (i < srt.length) {
    arr.push(copy.indexOf(srt[i]));
    i++;
  }
  let final = [];
  let j = 0;
  while (j < arr.length) {
    final.push(names[arr[j]]);
    j++;
  }
  return final;
};
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
