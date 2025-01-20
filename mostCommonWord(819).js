var mostCommonWord = function (paragraph, banned) {
  let words = paragraph.replace(/[.,'!:;/]/g, "");
  let fltr = words
    .split(" ")
    .filter((item) => item !== banned.toString())
    .map((val) => val.toLowerCase());

  let obj = {};
  for (let i = 0; i < fltr.length; i++) {
    let count = 0;
    for (let j = 0; j < fltr.length; j++) {
      if (fltr[i] == fltr[j]) {
        count += 1;
      }
    }
    obj[fltr[i]] = count;
    count = 0;
  }
  let highestKey = Object.keys(obj)[0];
  let highestValue = obj[highestKey];

  for (const key in obj) {
    if (obj[key] > highestValue) {
      highestValue = obj[key];
      highestKey = key;
    }
  }
  return highestKey;
};
