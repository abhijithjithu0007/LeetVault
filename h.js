var romanToInt = function (s) {
  let spl = s.split("");

  let obj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };
  let sum=0
  
for(let i=0;i<=spl.length-1;i++){
  
    if(obj[spl[i]] < obj[spl[i + 1]]){
        sum-=obj[spl[i]]
    }else{
        sum+= obj[spl[i]]
    }
}

return sum
}

console.log(romanToInt("LVIII"));
