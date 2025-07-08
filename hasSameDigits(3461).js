var hasSameDigits = function (s) {
  let arr = s.split("")

  while (arr.length > 2) {
    let arr2 = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let num = (Number(arr[i]) + Number(arr[i + 1])) % 10;
      arr2.push(num);
    }
    arr = arr2;
  }
    return arr[0] === arr[1];

};
