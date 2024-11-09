var reformatDate = function (date) {
  const dates = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
let str 
  let spl = date.split(" ");
  for (let i = 0; i < spl.length; i++) {
    let splone = spl[0].replace(/(st|nd|rd|th)$/i, "");

    let month = dates[spl[1]];

    let year =spl[2]

    str = year+"-"+month.toString()+"-"+splone

  }
return str

};

//"2052-10-20"

console.log(reformatDate("20th Oct 2052"));
