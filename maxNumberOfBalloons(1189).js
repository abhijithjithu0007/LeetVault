var maxNumberOfBalloons = function (text) {
  const data = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (let s of text) {
    data[s] += 1;
  }
  const ll = Math.floor(data.l / 2);
  const oo = Math.floor(data.o / 2);

  return Math.min(data.b, data.a, ll, oo, data.n);
};

console.log(maxNumberOfBalloons("nlaebolko"));
