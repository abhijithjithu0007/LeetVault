var restoreString = function (s, indices) {
  let obj = [];
  for (let i = 0; i < s.length; i++) {
    obj.push([s[i], indices[i]]);
  }
  const srtarr = obj.sort((a, b) => a[1] - b[1]);

  let ans = [];
  for (let j = 0; j < srtarr.length; j++) {
    ans.push(srtarr[j].splice(0, 1));
  }
  return ans.join("").toString();
};
