var dayOfYear = function (date) {
  let spl = date.split("-");

  const year = spl[0];

  let today = new Date(year + "-01-01");
  let target = new Date(date);

  let diff = target - today + 1;

  return Math.ceil(diff / (1000 * 3600 * 24));
};

console.log(dayOfYear("2019-01-09"));
