var runningSum = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let sl = nums.slice(0, i + 1);
    arr.push(sl.reduce((a, b) => a + b, 0));
  }
  return arr;
};
