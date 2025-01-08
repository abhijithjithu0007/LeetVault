var arrayStringsAreEqual = function (word1, word2) {
  let a = word1.join("");
  let b = word2.join("");

  if (a == b) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
