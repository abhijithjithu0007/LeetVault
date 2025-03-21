var arraySign = function (nums) {
  function signFunc(x) {
    if (x > 0) return 1;
    if (x == 0) return 0;
    return -1;
  }

  let pro = nums.reduce((a, b) => a * signFunc(b), 1);
  return signFunc(pro);
};
