var isAcronym = function (words, s) {
  let wrd = "";
  for (let i = 0; i <= words.length-1; i++) {
    wrd += words[i][0];
    
  }

  if(wrd===s){
    return true
  }else{
    return false
  }
};

console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
