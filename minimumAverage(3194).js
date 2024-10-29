var minimumAverage = function(nums) {
    
    const array = nums.sort((a,b)=>a-b)

    let last =array.pop()
     
console.log(array[0]);

    return (array[0]+last)/2
    
};

console.log(minimumAverage([7,8,3,4,15,13,4,1]));
