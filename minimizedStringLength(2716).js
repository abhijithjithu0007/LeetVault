var minimizedStringLength = function (s) {
  let sets = new Set(s)
  return sets.size
};

console.log(minimizedStringLength("aaabc"));
