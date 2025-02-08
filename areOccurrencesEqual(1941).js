var areOccurrencesEqual = function (s) {
  let arr = [];
  let spl = s.split("");
  for (let i = 0; i < spl.length; i++) {
    let count = 0;
    for (let j = 0; j < spl.length; j++) {
      if (spl[i] == spl[j]) count++;
    }
    arr.push(count);
  }
  let two = arr.every((x) => x === arr[0]);
  return two;
};

console.log(areOccurrencesEqual("vvvvvvvvvvvvvvvvvvv"));
