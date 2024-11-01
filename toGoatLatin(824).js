var toGoatLatin = function (sentence) {
  let spl = sentence.split(" ");
  let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arr = [];
  let index = 2;
  for (let i = 0; i < spl.length; i++) {
    if (!vowel.includes(spl[i][0])) {
      let sp = spl[i].split("");
      let first = sp.shift()
      sp.push(first)
      
      sp.join("");
      arr.push(sp.join('') + "m" + "a".repeat(index))
      index++;
    }
    if (vowel.includes(spl[i][0])) {
      arr.push(spl[i]);
      index++;
    }
  }
return arr.toString().replace(/,/g, ' ');
};

console.log(toGoatLatin("I speak Goat Latin"));
