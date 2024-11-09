var percentageLetter = function (s, letter) {
  let arr = [];

  for (let i of s) {
    if (i == letter) {
      arr.push(i);
    }
  }

  let perc = (arr.length / s.length) * 100;

  return Math.floor(perc);
};

console.log(percentageLetter("foobar", "o"));
