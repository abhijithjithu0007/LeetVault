var largestNumber = function (nums) {
  let result = [];

  nums.forEach((num) => {
    let length = num.toString().length;
    if (!result[length - 1]) {
      result[length - 1] = [];
    }
    result[length - 1].push(num);
  });

  let ans = result
    .flat()
    .sort((a, b) => b + "" + a - (a + "" + b))
    .join("");

  return ans[0] === "0" ? "0" : ans;
};
