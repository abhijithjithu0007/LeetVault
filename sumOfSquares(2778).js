var sumOfSquares = function (nums) {
  let total=0;

  for (let i = 1; i <= nums.length; i++) {
    if (nums.length % i == 0) {
        total+= nums[i-1]*nums[i-1]
    }
  }
  return total
  
};

console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));
