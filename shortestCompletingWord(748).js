var shortestCompletingWord = function (licensePlate, words) {
  let spl = licensePlate.split("");
  for (let i = 0; i < spl.length; i++) {
    let ind = spl.indexOf(spl[i]);
    if (!isNaN(Number(spl[i]))) {
      spl.splice(ind, 1);
      i--;
    }
  }
  let arr = spl.filter((item) => item !== " ").map((c) => c.toLowerCase());
  let ans = [];

  for (let j = 0; j < words.length; j++) {
    let cut = words[j].split("");
    let count = 0;
    for (let k = 0; k < arr.length; k++) {
      let ind = cut.indexOf(arr[k]);
      if (ind !== -1) {
        count++;
        cut.splice(ind, 1);
      }
      if (count === arr.length) {
        ans.push(words[j]);
      }
    }
  }

  ans.sort((a, b) => a.length - b.length);
  return ans[0];
};

console.log(
  shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
);
