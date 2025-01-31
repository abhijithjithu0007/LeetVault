var isBalanced = function (num) {
  let spl = num.split("");
  let even = [];
  let odd = [];
  for (let i = 0; i < spl.length; i++) {
    if (i % 2 == 0) {
      even.push(Number(spl[i]));
    } else {
      odd.push(Number(spl[i]));
    }
  }

  let sum1 = even.reduce((a, b) => a + b, 0);
  let sum2 = odd.reduce((a, b) => a + b, 0);

  return sum1 == sum2;
};
