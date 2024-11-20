var capitalizeTitle = function (title) {
  let spl = title.split(" ");
  let arr = "";
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length <= 2) {
      arr += spl[i].toLowerCase() + " ";
      continue;
    }
    let big = spl[i][0].toUpperCase();
    let s = big + spl[i].toLowerCase().slice(1);
    arr += s + " ";
  }
  return arr.trim();
};

console.log(capitalizeTitle("First leTTeR of EACH Word"));
