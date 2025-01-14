var calPoints = function (operations) {
  let arr = [];
  for (let i = 0; i < operations.length; i++) {
    switch (true) {
      case !isNaN(Number(operations[i])):
        arr.push(Number(operations[i]));
        break;

      case operations[i] == "C":
        arr.pop();
        break;
      case operations[i] == "D":
        arr.push(2 * arr[arr.length - 1]);
        break;

      case operations[i] == "+":
        arr.push(Number(arr[arr.length - 2] + arr[arr.length - 1]));
        break;

      default:
        break;
    }
  }

  return arr.reduce((a, b) => a + b, 0);
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
