var fib = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let sum = a + b;
    a = b;

    console.log(a,"aaa");
    
    b = sum;
    console.log("bbbb",b);
    
  }
  return b;
};

console.log(fib(4));
