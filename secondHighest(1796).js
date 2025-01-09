var secondHighest = function (s) {
  let spl = s.split("");
  let arr = [];
  for (let i = 0; i < spl.length; i++) {
    arr.push(Number(spl[i]));
  }
  let all = arr.filter((item) => !Number.isNaN(item));
  let final = all.sort((a, b) => a - b);
  let dup = new Set(final);
  let ans = [...dup];
  if (ans.length <= 1) return -1;
  return ans[ans.length - 2];
};

console.log(secondHighest("abc1111"));
