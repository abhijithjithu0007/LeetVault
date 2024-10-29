var sortSentence = function (s) {
  let all = s.split(" ").sort((a, b) => {
    let one = parseInt(a[a.length - 1]);
    let two = parseInt(b[b.length - 1]);
    return one - two;
  });
  let str = "";

  for (let i = 0; i < all.length; i++) {
    str += all[i].slice(0, all[i].length - 1)+' '
  }
  return str.trim()
};

console.log(sortSentence("is2 sentence4 This1 a3"));
