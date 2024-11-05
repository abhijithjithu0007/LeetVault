var makeFancyString = function (s) {
  let atr = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1] && s[i] == s[i + 2]) {
      continue;
    }
    atr += s[i];
  }
  return atr;
};

console.log(makeFancyString("leeetcode"));
