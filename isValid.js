function isValid(s) {
  let openCount = 0;

  let closeCount = 0;

  let a = s.split("");
  if (a.length == 2) {
    if (a[0] == a[1]) {
      return true;
    } else {
      return false;
    }
  }
  
  
  if (a.length > 2) {
    for (let char of s) {
      if (char === "(" || char === "{" || char === "[") {
        openCount += 1;
      } else if (char === ")" || char === "}" || char === "]") {
        closeCount += 1;
      }
    }
    if (openCount < closeCount || openCount > closeCount) {
      return false;
    } else if(openCount==closeCount){
      return true;
    }
  }
}

console.log(isValid("[{}]"));
