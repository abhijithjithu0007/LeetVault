var halvesAreAlike = function (s) {
  let len = s.length / 2;
  let letr = s.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let cut = letr.splice(0, len);
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(letr[i])) {
      count1++;
    }
    if (vowels.includes(cut[i])) {
      count2++;
    }
  }
  console.log(count1, count2);

  if (count1 === count2) {
    return true;
  } else {
    return false;
  }
};

console.log(halvesAreAlike("NmUOuOodeuUeEEoOOeiOxiOMoEeoItaoaUuoeEquoOouJU"));
