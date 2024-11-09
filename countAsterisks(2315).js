var countAsterisks = function (s) {
  let spl = s.split("|");
  let arr = [];
  for (let i = 0; i < spl.length; i++) {
    if ((i + 1) % 2 !== 0) {
      arr.push(spl[i]);
    }
  }

  let arr2 = [];
  let string = arr.toString();
  for (let j of string) {
    if (j == "*") {
      arr2.push(j);
    }
  }
  return arr2.length;
};

console.log(countAsterisks("l|*e*et|c**o|*de|"));
