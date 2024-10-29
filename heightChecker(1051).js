var heightChecker = function (heights) {
  let hit = [...heights];
  let srt = heights.sort((a, b) => a - b);
  let all = [];
  for (let i = 0; i < heights.length; i++) {
    if (hit[i] !== srt[i]) {
      all.push(i);
    }
  }
  return all.length
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
