var reformat = function (s) {
  let spl = s.split("");
  let odd = [];
  let even = [];
  spl.forEach((item) => {
    if (isNaN(Number(item))) {
      even.push(item);
    } else {
      odd.push(item);
    }
  });
  if (Math.abs(odd.length - even.length) > 1) {
    return "";
  }

  let result = [];
  let longer = odd.length > even.length ? odd : even;
  let shorter = odd.length <= even.length ? odd : even;

  for (let i = 0; i < longer.length; i++) {
    result.push(longer[i]);
    if (i < shorter.length) {
      result.push(shorter[i]);
    }
  }

  return result.join("");
};

console.log(reformat("leetcode"));
