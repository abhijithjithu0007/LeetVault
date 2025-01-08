var mergeAlternately = function (word1, word2) {
  let len = word1 + word2;
  let one = word1.split("");
  let two = word2.split("");
  let arr = [];
  for (let i = 0; i < len.length; i++) {
    if (true) {
      arr.push(one[i]);
    }
    if (true) {
      arr.push(two[i]);
    }
  }
  return arr.join("");
};

console.log(mergeAlternately("ab", "pqrs"));
