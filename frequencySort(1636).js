var frequencySort = function (nums) {
  let srt = nums.sort((a, b) => {
    let aFr = nums.filter((val) => val === a).length;
    let bFr = nums.filter((val) => val === b).length;

    // if (aFr === bFr) return b - a;

    return aFr - bFr;
  });

 return srt
};

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
