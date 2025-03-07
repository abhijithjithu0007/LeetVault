var finalValueAfterOperations = function (operations) {
  const obj = {
    "X--": -1,
    "--X": -1,
    "X++": 1,
    "++X": 1,
  };
  let count = 0;

  for (let i = 0; i < operations.length; i++) {
    count += obj[operations[i]];
  }

  return count;
};
