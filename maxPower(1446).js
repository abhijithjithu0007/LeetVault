var maxPower = function (s) {
  let spl = s.split("");
  let arr = [];
  for (let i = 0; i < spl.length; i++) {
    for (let j = 0; j < spl.length; j++) {
      if (spl[i] == spl[j]) {
        arr.push(spl[j]);
      }
    }
  }
  console.log(arr);
};

console.log(maxPower("abbcccddddeeeeedcba"));
