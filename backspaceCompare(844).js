var backspaceCompare = function (s, t) {
  let one = s.split("");
  let two = t.split("");
  for (let i = 0; i < one.length; i++) {
    if (one[i] == "#") {
      one.splice(i - 1, 2);
      i--;
    }
  }

  for (let i = 0; i < two.length; i++) {
    if (two[i] == "#") {
      two.splice(i - 1, 2);
      i--
    }
  }

  console.log(one.join(''));
  

  if(one.join('')==two.join('')){
    return true
  }else{
    return false
  }
};

console.log(backspaceCompare("ad#c", "ab#c"));
