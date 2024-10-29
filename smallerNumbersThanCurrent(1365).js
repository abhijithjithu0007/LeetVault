var smallerNumbersThanCurrent = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let num = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        num++;
      }
    }
    arr.push(num)
  }
  return arr
};
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
