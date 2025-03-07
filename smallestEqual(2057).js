var smallestEqual = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 10 == nums[i]) {
      arr.push(i);
    }
  }
  return arr.length > 0 ? Math.min(...arr) : -1;
};
