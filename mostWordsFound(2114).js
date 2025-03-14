var mostWordsFound = function (sentences) {
  let num = 0;
  for (let i = 0; i < sentences.length; i++) {
    let spl = sentences[i].split(" ");

    if (num < spl.length) num = spl.length;
  }

  return num;
};
