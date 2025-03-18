var canBeIncreasing = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let flag = true;
    let copy = [...nums];

    copy.splice(i, 1);

    for (let j = 0; j < copy.length; j++) {
      if (copy[j] >= copy[j + 1]) {
        flag = false;
        break;
      }
    }
    if (flag) return true;
  }
  return false;
};
