var scoreOfString = function (s) {
  let spl = s.split("");
  let arr = [];
  let ans = [];
  for (let i = 0; i < spl.length; i++) {
    arr.push(s.charCodeAt(i));
  }

  for (let j = 0; j < arr.length - 1; j++) {
    ans.push(arr[j] - arr[j + 1]);
  }
  return ans.map((item) => Math.abs(item)).reduce((a, b) => a + b);
};
console.log(scoreOfString("hello"));
