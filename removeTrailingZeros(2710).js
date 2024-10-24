var removeTrailingZeros = function (num) {
  let all = num.split("").reverse()

while (all[0]==0){
  all.shift()
}
 return all.join('')
 
   
};

console.log(removeTrailingZeros("51230100"));
