var minElement = function (nums) {
  let arr = nums.map(num=>num.toString().split('').map(Number).reduce((acc,val)=>acc+val,0))
  
return (...arr)
  
}; 

console.log(minElement([23, 43, 54, 51]));
