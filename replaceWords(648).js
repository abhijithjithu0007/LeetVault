var replaceWords = function (dictionary, sentence) {
  let spl = sentence.split(" ");
  let splCopy = [...spl];

  for (let j = 0; j < spl.length; j++) {
    let copy = spl[j].split("");
    let minRoot = null;

    for (let i = 0; i < dictionary.length; i++) {
      let dic = dictionary[i].split("");
      let match = true;

      for (let k = 0; k < dic.length; k++) {
        if (dic[k] !== copy[k]) {
          match = false;
          break;
        }
      }

      if (match) {
        if (minRoot === null || dictionary[i].length < minRoot.length) {
          minRoot = dictionary[i];
        }
      }
    }
    if (minRoot !== null) {
      splCopy[j] = minRoot;
    }
  }

  return splCopy.join(" ");
};

console.log(
  replaceWords(
    ["a", "aa", "aaa", "aaaa"],
    "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"
  )
);
