var prefixesDivBy5 = function (nums) {
  let arr = [];
  let prefix = 0;
  for (let i = 0; i < nums.length; i++) {
    prefix = (prefix * 2 + nums[i]) % 5;
    arr.push(prefix === 0);
  }

  return arr;
};

console.log(prefixesDivBy5([0, 1, 1]));
