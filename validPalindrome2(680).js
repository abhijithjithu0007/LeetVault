var validPalindrome = function (s) {
  let spl = s.split("").reverse().join("");

  if (spl == s) {
    return true;
  }
  for (let i = 0; i < s.length; i++) {
    let slic = s.slice(0, i) + s.slice(i + 1);
    console.log(slic);

    if (slic.split("").reverse().join("") == slic) {
      return true;
    } 
  }

  return false
};

console.log(validPalindrome("abca"));
