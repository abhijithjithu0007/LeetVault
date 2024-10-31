var isCircularSentence = function (sentence) {
  let spl = sentence.split(" ");

  if (spl[0][0] !== spl[spl.length - 1].slice(-1)) {
    return false;
  }

  if (spl.length == 1) {
    for (let i = 0; i < spl.length; i++) {
      let lastLetter = spl[i][spl[i].length - 1];
      let check = spl[i][0];

      if (lastLetter !== check) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < spl.length - 1; i++) {
      let lastLetter = spl[i][spl[i].length - 1];
      let check = spl[i + 1][0];

      if (lastLetter !== check) {
        return false;
      }
    }
  }
  return true;
};

console.log(isCircularSentence("Leetcode eisc cool"));
