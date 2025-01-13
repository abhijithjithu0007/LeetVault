var thirdMax = function (nums) {
  let num = new Set(nums);
  let arr = [...num].sort((a, b) => b - a);
  if (arr.length < 3) {
    let arr2 = [...num].sort((a, b) => a - b);
    return arr2.pop();
  }

  return arr[2];
};
