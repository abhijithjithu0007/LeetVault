var findMaxConsecutiveOnes = function (nums) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) count++;
    if (nums.length - 1 == i) {
      arr.push(count);
    }

    if (nums[i] == 0) {
      arr.push(count);
      count = 0;
    }
  }
  return Math.max(...arr);
};
