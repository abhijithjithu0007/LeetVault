var isMonotonic = function (nums) {
  let srt = [...nums];
  let srt2 = [...nums];
  let one = srt.sort((a, b) => a - b);
  let two = srt2.sort((a, b) => b - a);

  if (
    JSON.stringify(one) === JSON.stringify(nums) ||
    JSON.stringify(two) === JSON.stringify(nums)
  ) {
    return true;
  } else {
    return false;
  }
};
