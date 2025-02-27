var letterCombinations = function (digits) {
  if (!digits.length) return [];

  let data = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let arr = digits.split("").map((digit) => data[digit]);
  if (arr.length === 1) return arr[0];

  let final = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let temp = [];
    for (let ch1 of final) {
      for (let ch2 of arr[i]) {
        temp.push(ch1 + ch2);
      }
    }
    final = temp;
  }

  return final;
};
