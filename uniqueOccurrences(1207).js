var uniqueOccurrences = function (arr) {
  let count = 1;
  let ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      count++;
    } else {
      ans.push(count);
      count = 1;
    }
  }
  let sets = new Set([...ans]);
  return [...sets].length === ans.length ? true : false;
};
