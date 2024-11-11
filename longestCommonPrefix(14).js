var longestCommonPrefix = function (strs) {
  if (strs.length <= 1) {
    return strs.toString();
  }
  let all = "";
  let out = "";
  for (let i = 0; i < strs.length; i++) {
    all += strs[i][0];
    out += strs[i][1];
  }

  if (all[0] == all[1] && out[0] == out[1]) {
    return all[0] + out[0];
  } else {
    return "";
  }
};


console.log(longestCommonPrefix(["flower","flow","flight"]));
