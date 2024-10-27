var pivotIndex = function (nums) {
  let red = nums.reduce((val, ind) => val + ind, 0);
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (left === red - left - nums[i]) {
      return i;
    }
    left+=nums[i]
  }
  return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

[1, 7, 3, 6, 5, 6][(6, 5, 6, 3, 7, 1)];
