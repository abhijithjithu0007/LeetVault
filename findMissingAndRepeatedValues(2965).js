var findMissingAndRepeatedValues = function (grid) {
  let flats = grid.flat().sort();
  let arr = [];
  const duplicates = flats.filter(
    (item, index) => flats.indexOf(item) !== index
  );
  arr.push(duplicates);

  for (let i = 1; i < flats.length+1; i++) {
    if (flats.indexOf(i) == -1) {
      arr.push(i);
    }
  }
  return arr.flat()
};

console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
);
