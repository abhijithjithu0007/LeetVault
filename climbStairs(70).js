var climbStairs = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j == n) {
        arr.push(i,fucj);
      }
    }
  }
  return arr
};

console.log(climbStairs(5));
