var checkString = function (s) {
  let arr = s.match(/a+|b+/g);
  if (s.length == 1) return true;
  if (s.length == 1 && s == "b") return false;
  if (arr[0] == "b" && arr[1].includes("a")) return false;

  if (arr.length > 2) {
    return false;
  } else {
    return true;
  }
};
console.log(checkString("baa"));
