// var modifyString = function (s) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const missingLetters = [];

//   for (const letter of alphabet) {
//     if (!s.includes(letter)) {
//       missingLetters.push(letter);
//     }
//   }

//   let result = "";
//   let ind = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "?") {
//       result += missingLetters[ind];
//       ind++;
//     } else {
//       result += s[i];
//     }
//   }
//   return result;
// };

// console.log(modifyString("jqg??b"));



//not competed