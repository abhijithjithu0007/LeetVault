var findWords = function (words) {
  let keyb = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    let spl = words[i].toLowerCase().split("");
    for (let j = 0; j < keyb.length; j++) {
      let count = 0;
      for (let k = 0; k < spl.length; k++) {
        if (keyb[j].includes(spl[k])) {
          count++;
        }
      }
      if (count == spl.length) {
        arr.push(words[i]);
        break;
      }
    }
  }
  return arr;
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
