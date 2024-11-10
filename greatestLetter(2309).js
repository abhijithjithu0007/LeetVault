var greatestLetter = function (s) { 
  let str = s.toLowerCase();
  let arr = [];
  let dupe = str.split("").filter((val, ind) => str.indexOf(val) === ind && s.includes(val.toUpperCase()) && s.includes(val.toLowerCase()));
  for (let i = 0; i < dupe.length; i++) {
    let f = dupe[i].toUpperCase().charCodeAt(0) - 64;
    arr.push(f);
  }

  if (arr.length===0) {
    return "";

  } else {
    let max = Math.max(...arr);

    return String.fromCharCode(max + 64).toString();
  }
};
console.log(greatestLetter("SSSSSSSSSSSSS"));
