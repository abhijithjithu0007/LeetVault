var reverseDegree = function (s) {
  let spl = s.split("");

  let chars = "zyxwvutsrqponmlkjihgfedcba".split("");
  let arr = [];
  for (let i = 0; i < spl.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      if (spl[i] == chars[j]) {
        arr.push((j + 1) * (i + 1));
        break;
      }
    }
  }

  return arr.reduce((a,b)=>a+b,0)
};

console.log(reverseDegree("abc"));
