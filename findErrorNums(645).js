var findErrorNums = function (nums) {
  let arr = [];
  let num = nums.sort();
  const dupe = num.filter((val, ind) => num.indexOf(val) !== ind);
  arr.push(dupe);
  for (let i = 1; i <= num.length; i++) {
    if (num.indexOf(i) == -1) {
      arr.push(i);
    }
  }

  return arr.flat();
};

console.log(findErrorNums([1, 2, 2, 4]));
