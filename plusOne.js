var plusOne = function(digits) {
    let all = digits.join('')
    
    let ans = BigInt(all)+BigInt(1)
    
    let spl = ans.toString().split('')
    let arr =[]
    
    for(let i=0;i<spl.length;i++){
           arr.push(parseInt(spl[i]))
    }
    return arr
    
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
