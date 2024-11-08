var numUniqueEmails = function (emails) {
  let arr = [];

  for (let i = 0; i < emails.length; i++) {
    let [splone, spltwo] = emails[i].split("@");

    if (splone.includes("+")) {
      splone = splone.split("+")[0];
    }

    splone = splone.replace(/\./g, "");

    const plusR = splone + "@" + spltwo;

    arr.push(plusR);
  }

  let last = [...new Set(arr)];

  return last.length;
};

console.log(
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
);
