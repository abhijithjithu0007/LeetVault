var findKthPositive = function (arr, k) {
  let fin = arr.length + k + 1;
  // return fin
  let ans = [];
  for (let i = 0; i < fin; i++) {
    if (!arr.includes(i)) {
      ans.push(i);
    }
  }
  return ans[k];
};
console.log(findKthPositive([1, 2, 3, 4], 2));
