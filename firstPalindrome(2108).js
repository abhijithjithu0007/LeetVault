var firstPalindrome = function (words) {
  let str = "";
  for (let i = 0; i < words.length; i++) {
    let spl = words[i].split("").reverse().join("");
    // console.log(spl)
    if (spl == words[i]) {
      str = words[i];
      break;
    }
  }
  return str;
};
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
