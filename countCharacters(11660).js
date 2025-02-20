var countCharacters = function (words, chars) {
  let ans = [];

  for (let i = 0; i < words.length; i++) {
    let spl = words[i].split("");
    let charCopy = chars.split("");
    let count = 0;

    for (let j = 0; j < spl.length; j++) {
      let index = charCopy.indexOf(spl[j]);
      if (index !== -1) {
        charCopy.splice(index, 1);
        count++;
      }
    }
    if (count === spl.length) {
      ans.push(words[i]);
    }
  }

  return ans.join("").length;
};
