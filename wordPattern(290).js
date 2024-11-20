var wordPattern = function (pattern, s) {
  let count1 = 0;
  let count2 = 0;
  let limit1 = Math.floor(pattern.length / 2);

  for (let i = 0; i < limit1; i++) {
    if (pattern[i] === pattern[pattern.length - 1 - i]) {
      count1 += 1;
    }
  }
  let spl = s.split(" ");
  let limit2 = Math.floor(spl.length / 2);

  for (let j = 0; j < limit2; j++) {
    if (spl[j] === spl[spl.length - 1 - j]) {
      count2 += 1;
    }
  }

  if (count1 == count2) {
    return true;
  }
  return false;
};

console.log(wordPattern("abba", "dog cat cat dog"));
