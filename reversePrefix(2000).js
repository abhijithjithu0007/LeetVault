var reversePrefix = function (word, ch) {
  let spl = word.split("");
  let ind = spl.indexOf(ch);
  let cut = spl.splice(0, ind + 1).reverse();

  let ans = spl.concat(cut);

  return [...cut, ...spl].join("");
};

console.log(reversePrefix("abcdefd", "d"));
