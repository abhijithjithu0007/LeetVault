var isValid = function (word) {
  if (word.length < 3 || word.length > 9) return false;


 
  if (/[aeiou]/.test(word)&&/[AEIOU]/.test(word)&&/[A-Z]/.test(word)&&/[0-9]/.test(word)) {
    
    if (/[@#$%&*]/.test(word)) {
        return false
    }
    if(/[a-z]/.test(word)){
        return true
      }
      return true
  }
  
return false

  
};

console.log(isValid("aya"));
//234Adas@
