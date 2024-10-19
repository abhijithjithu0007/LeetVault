var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  const ind = Math.floor(nums.length / 2);
  return nums[ind];
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
