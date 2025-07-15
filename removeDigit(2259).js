var removeDigit = function (number, digit) {
  let ans = [];

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let removed = number.substring(0, i) + number.substring(i + 1);
      ans.push(removed);
    }
  }

  let max = ans[0];
  for (let i = 1; i < ans.length; i++) {
    if (ans[i] > max) {
      max = ans[i];
    }
  }

  return max;
};
