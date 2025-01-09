var numDifferentIntegers = function (word) {
  let spl = word.split("");
  let arr = [];
  let final = [];
  for (let i = 0; i < spl.length; i++) {
    if (!isNaN(spl[i])) {
      arr.push(Number(spl[i]));
    } else {
      arr.push("-");
    }
  }

  let ans = arr.join(",").replace(/,/g, "").split("-");

  for (let j = 0; j < ans.length; j++) {
    if (ans[j] == "") continue;
    final.push(BigInt(ans[j]));
  }

  return new Set(final).size;
};
