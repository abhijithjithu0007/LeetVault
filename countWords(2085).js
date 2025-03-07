var countWords = function (words1, words2) {
  let ans = 0;
  let first = words1.filter(
    (word) => words1.indexOf(word) === words1.lastIndexOf(word)
  );
  let second = words2.filter(
    (word) => words2.indexOf(word) === words2.lastIndexOf(word)
  );

  for (let i = 0; i < first.length; i++) {
    let count = 0;
    for (let j = 0; j < second.length; j++) {
      if (first[i] == second[j]) count++;
    }
    if (count == 1) {
      ans++;
      count = 0;
    }
  }
  return ans;
};
